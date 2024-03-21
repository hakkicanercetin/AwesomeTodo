import * as Yup from "yup"

const validation = Yup.object({
    text:Yup.string().required("Text is required field!")
})
export default validation