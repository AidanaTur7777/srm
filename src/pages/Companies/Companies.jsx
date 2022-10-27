import React , { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import cl from "./companies.module.scss";
import Layout from "../../Layout/Layout";
import { useDispatch } from "react-redux";
import { fetchCompany } from "../../features/company/companySlise";
import { useForm } from "react-hook-form";

const Companies = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompany())
  }, [dispatch])
  const submitForm = (data) => {
    console.log(data);
  };
  const [state, setState] = useState({
		name: '',
		author: '',
	});
	const handle = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};
  return (
    <Layout>
      <div className={cl.companies}>
        <form onCubmit={handleSubmit(submitForm)}>
          <div className={cl.companies__category}>
            <h2 className={cl.companies__title}>Наименование компании</h2>
            <input
              className={cl.companies__input}
              type="text"
              {...register("company_name")}
              required
            />
          </div>
          <div className={cl.companies__category}>
            <h2 className={cl.companies__title}>Юридический адрес</h2>
            <input
              className={cl.companies__input}
              type="text"
              {...register("legal_address")}
              required
            />
          </div>
          <div className={cl.companies__category}>
            <h2 className={cl.companies__title}>Фактический адрес</h2>
            <input
              className={cl.companies__input}
              type="text"
              {...register("actual_address")}
              required
            />
          </div>
          <div className={cl.companies__category}>
            <h2 className={cl.companies__title}>Номер телефона</h2>
            <input
              className={cl.companies__input}
              type="text"
              {...register("telephone")}
              required
            />
          </div>
          <div className={cl.companies__category}>
            <h2 className={cl.companies__title}>Сфера деятельности</h2>
            <input
              className={cl.companies__input}
              type="text"
              {...register("field_activity")}
              required
            />
          </div>
          <div className={cl.companies__category}>
            <h2 className={cl.companies__title}>Okpo</h2>
            <input
              className={cl.companies__input}
              type="text"
              {...register("okpo")}
              required
            />
          </div>
          <div className={cl.companies__category}>
            <h2 className={cl.companies__title}>inn</h2>
            <input
              className={cl.companies__input}
              type="text"
              {...register("inn")}
              required
            />
          </div>
          <div className={cl.companies__category}>
            <h2 className={cl.companies__title}>Register number</h2>
            <input
              className={cl.companies__input}
              type="text"
              {...register("register_number")}
              required
            />
          </div>
          <Button>Submit</Button>
          
        </form>
      </div>
    </Layout>
  );
};

export default Companies;


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