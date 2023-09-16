import moment from "moment";
import { date } from "yup";
import { object, string, ref } from "yup";
import apiService from "../../../helpers/apiService";

export const initialValues = {
  name: "",
  date: "",
  mode: "",
  modelDetails: "",
  topic: "",
  speakers: "",
  details: "",
  personOfContact: "",
  rules: "",
  deadline: "",
  community: "",
  capacity: "",
  type: "",
  tags: "",
};

const NAME_PATTERN = new RegExp("^(?![\\s.]+$)[a-zA-Z\\s.]*$");

export const formSchema = object({
  // eventName: string("Enter name")
  //   .required("Name is required")
  //   .matches(NAME_PATTERN, "Name can only have letters, space and ."),
  // eventDate: date()
  //   .max(new Date(), "You can't be born in the future!")
  //   .required("DOB is required"),
  // modeDetails: string("Mode Details")
  //   .required("Mode details is required")
  //   .matches(NAME_PATTERN, "Name can only have letters, space and ."),
  // topic: string("Mode Details")
  //   .required("Mode details is required")
  //   .matches(NAME_PATTERN, "Name can only have letters, space and ."),
  // speakers: string("Mode Details")
  //   .required("Mode details is required")
  //   .matches(NAME_PATTERN, "Name can only have letters, space and ."),
  // eventDetails: string("Mode Details")
  //   .required("Mode details is required")
  //   .matches(NAME_PATTERN, "Name can only have letters, space and ."),
  // personOfContact: string("Mode Details")
  //   .required("Email is required")
  //   .email("Email is invalid."),
  // rules: string("Mode Details")
  //   .required("Mode details is required")
  //   .matches(NAME_PATTERN, "Name can only have letters, space and ."),
  // deadline: date()
  //   .max(new Date(), "You can't be born in the future!")
  //   .required("DOB is required"),
  // community: string("Mode Details")
  //   .required("Email is required")
  //   .email("Email is invalid."),
  // capacity: string("Mode Details")
  //   .required("Mode details is required")
  //   .matches(NAME_PATTERN, "Name can only have letters, space and ."),
  // tag: string("Mode Details")
  //   .required("Mode details is required")
  //   .matches(NAME_PATTERN, "Name can only have letters, space and ."),
});

export default {
  create: async (payload) => {
    //return await apiService.postSignup("signup", payload);
    return {};
  },
};
