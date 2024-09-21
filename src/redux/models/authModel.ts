import tripbeyond from "@/utils/axios/tripbeyond";
import { action, thunk } from "easy-peasy";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export const authModel = {
  data: null,
  isLoading: false,

  // actions
  setData: action((state: any, payload) => {
    state.data = payload;
  }),

  setIsLoading: action((state: any, payload) => {
    state.isLoading = payload;
  }),

  // Register agent with enhanced error handling
  register: thunk(async (actions: any, payload: any) => {
    const { credentials, router } = payload;
    actions.setIsLoading(true);
    try {
      const response = await tripbeyond.post("/agent/register", credentials);
      actions.setData(response.data);

      toast.success(response.data.message);
      router.push("/signin/agent");
    } catch (error: any) {
      actions.setData(error.response.data);
      toast.error(error.response.data.message);
    } finally {
      actions.setIsLoading(false);
    }
  }),

  login: thunk(async (actions: any, payload: any) => {
    const { credentials, router } = payload;

    actions.setIsLoading(true);
    try {
      const response = await tripbeyond.post("/agent/login", credentials);
      actions.setData(response.data);
      toast.success(response.data.message);
      Cookies.set("auth", response.data.token, { expires: 7 });

      router.push("/search-engine");
    } catch (error: any) {
      actions.setData(error.response.data);
      toast.error(error.response.data.message);
    } finally {
      actions.setIsLoading(false);
    }
  }),
};
