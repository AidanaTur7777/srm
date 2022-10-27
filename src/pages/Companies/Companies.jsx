import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import classes from './companies.module.scss'
import { useDispatch } from 'react-redux'
import {
  fetchActivity,
  fetchCompany,
} from '../../features/company/companySlise'
import Layout from '../../Layout/Layout'
import cl from './companies.module.scss'
import Modal from 'antd/lib/modal/Modal'
import { IoIosAddCircleOutline } from 'react-icons/io'

const _initialValues = {
  company_name: '',
  inn: '',
  legal_address: '',
  actual_address: '',
  telephone: '',
  okpo: '',
  register_number: '',
  field_activity: 0,
}

const initialValuesActive = {
  activites_add: '',
}

const ProductForm = ({ defaultValues = _initialValues }) => {
  const initialValues = {
    ...initialValuesActive,
    ..._initialValues,
    ...defaultValues,
  }
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCompany())
    dispatch(fetchActivity())
  }, [dispatch])
  const handleSubmit = (data) => {
    dispatch(fetchCompany(data))
  }
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleOk = (data) => {
    dispatch(fetchActivity(data))
    console.log(data)
    setIsModalOpen(false)
  }

  return (
    <Layout>
      <div className={cl.companies}>
        <Form
          onFinish={handleSubmit}
          layout="vertical"
          name="basic"
          className={classes.content_wrapper}
          initialValues={{ remember: true }}
          autoComplete="on"
          fields={Object.keys(initialValues).map((key) => ({
            name: key,
            value: initialValues[key],
          }))}
        >
          <Form.Item className={cl.companies__category} name="company_name">
            <h2 className={cl.companies__title}>Наименование компании</h2>
            <Input
              className={cl.companies__input}
              id="company_name"
              name="company_name"
            />
          </Form.Item>
          <Form.Item
            className={cl.companies__category}
            label="Юридический адрес"
            name="legal_address"
          >
            <Input
              className={cl.companies__input}
              id="legal_address"
              name="legal_address"
            />
          </Form.Item>
          <Form.Item className={cl.companies__category} label="Inn" name="inn">
            <Input
              className={cl.companies__input}
              id="inn"
              name="inn"
              placeholder="11111111111111"
              type="number"
            />
          </Form.Item>
          <Form.Item
            className={cl.companies__category}
            label="Фактический адрес"
            name="actual_address"
          >
            <Input
              className={cl.companies__input}
              id="actual_address"
              name="actual_address"
            />
          </Form.Item>
          <Form.Item
            className={cl.companies__category}
            label="Номер телефона"
            name="telephone"
          >
            <Input
              className={cl.companies__input}
              id="telephone"
              name="telephone"
              type="tel"
            />
          </Form.Item>
          <Form.Item
            className={cl.companies__category}
            label="Okpo"
            name="okpo"
          >
            <Input
              className={cl.companies__input}
              id="okpo"
              name="okpo"
              type="number"
            />
          </Form.Item>
          <Form.Item
            className={cl.companies__category}
            label="Регистрационный номер"
            name="register_number"
          >
            <Input
              className={cl.companies__input}
              id="register_number"
              name="register_number"
            />
          </Form.Item>
          <Form.Item
            className={cl.companies__category}
            label="Cфера деятельности"
            name="field_activity"
          >
            <Input
              className={cl.companies__input}
              id="field_activity"
              name="field_activity"
              type="number"
            />

            <IoIosAddCircleOutline onClick={showModal} />
            <Modal
              title="Basic Modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Form.Item
                className={cl.companies__category}
                label="Cфера деятельности"
                name="activites_add"
              >
                <Input
                  className={cl.companies__input}
                  id="activites_add"
                  name="activites_add"
                />
              </Form.Item>
            </Modal>
          </Form.Item>
          <Row gutter={30} className={classes.form_button}>
            <Col span={12}>
              <Button
                type="primary"
                ghost
                size="large"
                htmlType="submit"
                block
                className={classes.form_button_item}
              >
                Опубликовать
              </Button>
            </Col>
          </Row>
          <Modal
            // visible={open}
            // closable={false}
            // wrapClassName={`modal ${loading ? 'pending' : ''}`}
            // style={{ top: 144, left: -10, borderRadius: 30, padding: 0 }}
            // footer={null}
            // width={1190}
            // onCancel={handleCloseModal}
            // onOk={handleOpenModal}
          ></Modal>
        </Form>
      </div>
    </Layout>
  )
}

export default ProductForm