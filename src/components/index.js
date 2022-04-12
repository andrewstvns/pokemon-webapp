import { lazy } from "react";

import Button from "./Button";
import Header from "./Header";
import Loader from "./Loader";
import Input from "./Input";
import Popup from "./Popup";
import PopupInformation from "./PopupInformation";

const Card = lazy(() => import('./Card'));
const CardDetail = lazy(() => import('./CardDetail'));

export {
  Button,
  Card,
  CardDetail,
  Header,
  Loader,
  Input,
  Popup,
  PopupInformation
}