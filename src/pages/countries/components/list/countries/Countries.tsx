import Content from "@/pages/countries/components/list/countries/countryCard/content";
import Details from "@/pages/countries/components/list/countries/countryCard/details";
import Header from "@/pages/countries/components/list/countries/countryCard/header";
import Image from "@/pages/countries/components/list/countries/countryCard/image";
import CountryCard from "@/pages/countries/components/list/countries/countryCard";
import styles from "./CountriesStyles.module.css";
import React, { useRef, useCallback } from "react";
import Likes from "./countryCard/likes";
import SortButtons from "./sortButtons";
import AddCountry from "./addCountry";
import { CountyFormData } from "@/pages/countries/types";
import { Countries } from "@/language/language";
import InputOTP from "./inputOTP";
import { Country } from "./reducer/state";
import { useMutation, useInfiniteQuery } from "@tanstack/react-query";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useSearchParams } from "react-router-dom";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import {
  createCountry,
  deleteCountry,
  getCountries,
  editCountry,
} from "@/api/countries";

const ITEMS_PER_PAGE = 12;


const CountriesComp: React.FC<{
  language: "en" | "ka";
  content: Countries;
}> = ({ language, content }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSort = searchParams.get("sort") || "default";

  const parentRef = useRef<HTMLDivElement>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    refetch,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ["countries", currentSort],
    queryFn: ({ pageParam = 1 }) => {
      return getCountries({
        page: pageParam,
        limit: ITEMS_PER_PAGE,
        sort: "likes",
        order: currentSort === "desc" ? "desc" : "asc"
      });
    },
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.hasMore) return undefined;
      return allPages.length + 1;
    },
    initialPageParam: 1,
  });

  const allCountries = data?.pages.flatMap(page => page.data) || [];

  const loadMoreRef = useInfiniteScroll<HTMLDivElement>({
    loading: isFetchingNextPage,
    hasMore: !!hasNextPage,
    onLoadMore: () => {
      if (!isFetchingNextPage && hasNextPage) {
        fetchNextPage();
      }
    },
    rootMargin: "100px"
  });

  const getNumColumns = useCallback(() => {
    if (!parentRef.current) return 1;
    const containerWidth = parentRef.current.offsetWidth;
    const cardWidth = 320 + 40;
    return Math.floor(containerWidth / cardWidth);
  }, []);

  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(allCountries.length / getNumColumns()),
    getScrollElement: () => parentRef.current,
    estimateSize: () => 134 + 40,
    overscan: 2,
  });

  const { mutate: createCountryMutate } = useMutation({
    mutationFn: createCountry,
  });

  const { mutate: editCountryMutate } = useMutation({
    mutationFn: editCountry,
  });

  const { mutate: deleteCountryMutate } = useMutation({
    mutationFn: deleteCountry,
  });

  const handleLikeButton = (id: string) => {
    const country = allCountries.find((c) => c.id === id);
    if (country) {
      editCountryMutate({
        id,
        payload: { ...country, likes: country.likes + 1 },
      });
    }
  };

  const handleSortButton = (sortType: "asc" | "desc" | "default") => {
    setSearchParams({ sort: sortType });
  };

  const handleCreateCounty = (formData: CountyFormData) => {
    const newCountry = {
      id: (Number(allCountries.at(-1)?.id) + 1).toString(),
      ...formData,
      likes: 0,
      active: true,
    };
    createCountryMutate({ payload: newCountry });
  };

  const handleEditCountry = (updatedData: Country, id: string) => {
    editCountryMutate(
      { id, payload: updatedData },
      {
        onSuccess: () => {
          refetch();
        },
      },
    );
  };

  const handleDeleteCountry = (id: string | number) => {
    console.log(id);

    deleteCountryMutate(id, {
      onSuccess: () => {
        refetch();
      },
    });
  };

  return (
    <div className={styles.appCountriesContainer}>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <SortButtons 
            content={content} 
            handleSortButton={handleSortButton}
          />
          <div className={styles.appCountriesForms}>
            <AddCountry content={content} onCountyCreate={handleCreateCounty} />
            <InputOTP length={6} />
          </div>
          <div
            ref={parentRef}
            className={styles.appCountriesWrapper}
            style={{
              height: "100vh",
              overflow: "auto",
              padding: "20px",
            }}
          >
            <div
              style={{
                height: `${rowVirtualizer.getTotalSize()}px`,
                width: "100%",
                position: "relative",
              }}
            >
              {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                const startIndex = virtualRow.index * getNumColumns();
                const rowCountries = allCountries
                  .slice(startIndex, startIndex + getNumColumns());
                return (
                  <div
                    key={virtualRow.index}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${virtualRow.start}px)`,
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "40px",
                    }}
                  >
                    {rowCountries.map((country) => (
                      <CountryCard
                        onEdit={handleEditCountry}
                        country={country}
                        content={content}
                        key={country.id}
                      >
                        <Image
                          flag={country.flag}
                          name={country.name[language]}
                        />
                        <Details
                          renderHeader={
                            <Header name={country.name[language]} />
                          }
                        >
                          <Content
                            content={content}
                            capital={country.capital[language]}
                            population={country.population[language]}
                            id={country.id}
                            onCountryDelete={handleDeleteCountry}
                          />
                        </Details>
                        <Likes
                          handleLikeButton={() => handleLikeButton(country.id)}
                          likes={country.likes}
                        />
                      </CountryCard>
                    ))}
                  </div>
                );
              })}
            </div>
            <div ref={loadMoreRef} style={{ height: "20px", margin: "20px 0" }}>
              {isFetchingNextPage ? "Loading more..." : hasNextPage ? "Load more" : "No more countries"}
            </div>
            {isError && "ერორი მოხდა"}
          </div>
        </>
      )}
    </div>
  );
  
};

export default CountriesComp;
