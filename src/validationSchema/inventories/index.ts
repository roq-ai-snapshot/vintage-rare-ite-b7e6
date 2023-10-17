import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  item_id: yup.string().nullable().required(),
  vendor_id: yup.string().nullable().required(),
});
