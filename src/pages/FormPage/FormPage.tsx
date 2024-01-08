import DynamicForm from '../../features/Form/DynamicForm'
import formFields from '../../core/constants/formFields/formFields.json'
import { InputField } from '../../core/types/formTypes/formTypes'

const FormPage = () => {
  return (
    <>
      <DynamicForm
        fields={formFields.fields as (InputField | InputField[])[]}
      />
    </>
  )
}

export default FormPage
