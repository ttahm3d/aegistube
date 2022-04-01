import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ({ message, type }) {
  return toast(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
    type: type,
    transition: Slide,
    closeOnClick: true,
  });
}
