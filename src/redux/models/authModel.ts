import tripbeyond from "@/utils/axios/tripbeyond";
import { action, thunk } from "easy-peasy";
import { toast } from "react-toastify";

export const authModel = {
  login: {
    // states
    isLoading: false,
    data: null,
    error: null,

    // actions
    setData: action((state: any, payload) => (state.data = payload)),
    setIsLoading: action((state: any, payload) => (state.isLoading = payload)),
    setError: action((state: any, payload) => (state.error = payload)),

    //server actions
    login: thunk(async (actions: any, payload: any) => {
      const { credentials, router } = payload;
      try {
        actions.setIsLoading(true);
        const { data } = await tripbeyond.post("/agent/login", credentials);
        actions.setData(data);
        toast.success("Congratulations!!!" + data?.message);
        router.push("/search-engine");
        actions.setIsLoading(false);
      } catch {
        actions.setError("Something went wrong");
        toast.success("Oops! Login failed");
        actions.setIsLoading(false);
      }
    }),
  },
};
