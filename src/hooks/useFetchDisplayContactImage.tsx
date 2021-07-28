import { useQuery } from "react-query";
import axios from "axios";
import { BaseUrl, accessToken } from "../api";
export default function useFetchCategories(id: string) {
  const data = useQuery("contacts", () =>
    axios
      .get(`${BaseUrl}/contacts/${id}/image`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        return res;
      })
  );
  return data;
}
