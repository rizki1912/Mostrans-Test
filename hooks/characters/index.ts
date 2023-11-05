import { api } from "@/config/api";
import { TErrorResponse } from "@/types";
import { TCharacter, TDetailCharacter } from "@/types/characters";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const getCharacters = async (page: number = 1): Promise<TCharacter> => {
  const { data } = await api.get(`/character?page=${page}`);

  return data;
};

export const getDetailCharacter = async (
  id: string
): Promise<TDetailCharacter> => {
  const { data } = await api.get(`/character/${id}`);

  return data;
};

export const useGetCharacters = (
  page: number
): UseQueryResult<TCharacter, TErrorResponse> => {
  const options = {
    queryKey: ["characters", page],
    queryFn: async () => await getCharacters(page),
  };

  return useQuery(options);
};

export const useGetDetailCharacter = (
  id: string
): UseQueryResult<TDetailCharacter, TErrorResponse> => {
  const options = {
    queryKey: ["detailCharacter", id],
    queryFn: async () => await getDetailCharacter(id),
  };

  return useQuery(options);
};
