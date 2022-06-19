import { toast } from "react-hot-toast";

export default function ({ message, type }) {
  return toast[type](message);
}
