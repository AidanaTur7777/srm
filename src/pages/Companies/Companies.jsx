import React from 'react'
import Layout from '../../Layout/Layout'
import CompaniesContent from './CompaniesContent'

const Companies = () => {
  return (
    <Layout>
      <CompaniesContent/>
    </Layout>
  )
}

export default Companies


// import React, { useEffect } from 'react'
// import { Form, Input, Button, Row, Col } from 'antd'
// import classes from './companies.module.scss'
// import { useDispatch } from 'react-redux'
// import { fetchCompany } from '../../features/company/companySlise'

// const _initialValues = {
//   company_name: '',
//   inn: '',
//   legal_address: '',
//   actual_address: '',
//   telephone: '',
//   okpo: '',
//   register_number: '',
//   field_activity: 0,
// }

// const ProductForm = ({ onSubmit, defaultValues = _initialValues }) => {
//   const initialValues = {
//     ..._initialValues,
//     ...defaultValues,
//   }
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(fetchCompany())
//   }, [dispatch])
//   const handleSubmit = (data) => {
//     dispatch(fetchCompany(data))
//     console.log(data);
//   }
//   return (
//     <Form
//       onFinish={handleSubmit}
//       layout="vertical"
//       name="basic"
//       className={classes.content_wrapper}
//       initialValues={{ remember: true }}
//       autoComplete="on"
//       fields={Object.keys(initialValues).map((key) => ({
//         name: key,
//         value: initialValues[key],
//       }))}
//     >
//       <Form.Item label="company_name" name="company_name">
//         <Input
//           id="company_name"
//           name="company_name"
//           placeholder="Тип упаковки"
//         />
//       </Form.Item>
//       <Form.Item label="inn" name="inn">
//         <Input id="inn" name="inn" placeholder="Тип упаковки" />
//       </Form.Item>
//       <Form.Item label="legal_address" name="legal_address">
//         <Input
//           id="legal_address"
//           name="legal_address"
//           placeholder="Тип упаковки"
//         />
//       </Form.Item>
//       <Form.Item label="actual_address" name="actual_address">
//         <Input
//           id="actual_address"
//           name="actual_address"
//           placeholder="Тип упаковки"
//         />
//       </Form.Item>
//       <Form.Item label="telephone" name="telephone">
//         <Input id="telephone" name="telephone" placeholder="Тип упаковки" />
//       </Form.Item>
//       <Form.Item label="okpo" name="okpo">
//         <Input id="okpo" name="okpo" placeholder="Тип упаковки" />
//       </Form.Item>
//       <Form.Item label="register_number" name="register_number">
//         <Input
//           id="register_number"
//           name="register_number"
//           placeholder="Тип упаковки"
//         />
//       </Form.Item>
//       <Form.Item label="field_activity" name="field_activity">
//         <Input
//           id="field_activity"
//           name="field_activity"
//           placeholder="Тип упаковки"
//         />
//       </Form.Item>
//       <Row gutter={30} className={classes.form_button}>
//         <Col span={12}>
//           <Button
//             type="primary"
//             ghost
//             size="large"
//             htmlType="submit"
//             block
//             className={classes.form_button_item}
//           >
//             Опубликовать
//           </Button>
//         </Col>
//       </Row>
//     </Form>
//   )
// }

// export default ProductForm