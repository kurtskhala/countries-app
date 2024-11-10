import { httpClient } from "@/api";
import { Country } from "@/pages/countries/components/list/countries/reducer/state";

export const getCountries = async (endpoint?: string): Promise<Country[]> => {
    try {
      const url = endpoint || "/countries";      
      const response = await httpClient.get(url);
      return response.data;
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
