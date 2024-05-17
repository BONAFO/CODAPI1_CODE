import { useRoute } from "vue-router";

export default function GET_PARAMS() {
  return useRoute().params;
}
