import { httpClient } from "@/api";
import { Country } from "@/pages/countries/components/list/countries/reducer/state";

interface GetCountriesParams {
  sort?: string;
  order?: "asc" | "desc";
  page?: number;
  limit?: number;
}

export const getCountries = async (
  params?: GetCountriesParams,
): Promise<{
  data: Country[];
  hasMore: boolean;
  total: number;
}> => {
  try {
    let url = "/countries";
    const queryParams = new URLSearchParams();

    if (params) {
      if (params.sort) {
        const sortPrefix = params.order === "desc" ? "-" : "";
        queryParams.append("_sort", `${sortPrefix}${params.sort}`);
      }

      if (params.page && params.limit) {
        queryParams.append("_page", params.page.toString());
        queryParams.append("_limit", params.limit.toString());
      }
    }

    const queryString = queryParams.toString();
    if (queryString) {
      url += `?${queryString}`;
    }
    const countResponse = await httpClient.get("/countries");
    const total = countResponse.data.length;

    const response = await httpClient.get(url);

    const currentCount = (params?.page || 1) * (params?.limit || 12);
    const hasMore = currentCount < total;

    return {
      data: response.data,
      hasMore,
      total,
    };
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getCountry = async (id: string): Promise<Country> => {
  try {
    const response = await httpClient.get(`/countries/${id}`);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const editCountry = async ({
  id,
  payload,
}: {
  id: string | number;
  payload: Country;
}): Promise<void> => {
  try {
    await httpClient.put(`/countries/${id}`, payload);
  } catch (e) {
    console.error(e);
  }
};

export const createCountry = async ({
  payload,
}: {
  payload: Country;
}): Promise<void> => {
  try {
    await httpClient.post(`/countries`, payload);
  } catch (e) {
    console.error(e);
  }
};

export const deleteCountry = async (id: string | number): Promise<void> => {
  try {
    await httpClient.delete(`/countries/${id}`);
  } catch (e) {
    console.error(e);
  }
};
