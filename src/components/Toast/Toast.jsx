import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ({ message, type }) {
  return toast(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2,
    type: type,
    transition: Slide,
    closeOnClick: true,
  });
}
