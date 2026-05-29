import { ListingControllerContext } from "@/context/ContextBase";
import { useContext } from "react";

export const useListingController = () => useContext(ListingControllerContext);
