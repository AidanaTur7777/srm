import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import cl from './companies.module.scss'
import Layout from '../../Layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCompany } from '../../features/company/companySlise'
import { BsPlusLg } from 'react-icons/bs'
import { Modal, Select } from 'antd'
import {
  fetchActivites,
  fetchActivitesGet,
} from '../../features/company/activitySlise'
import Activites from './Activites'
import ActivitesItem from './ActivitesItem'

const Companies = (data) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCompany())
    dispatch(fetchActivites())
    dispatch(fetchActivitesGet())
  }, [dispatch])
  const handleSubmit = () => {
    dispatch(fetchCompany(state))
    console.log(state)
  }
  const { activitesInfo } = useSelector((state) => state.activites)
  const [activites, setActivites] = useState(
    activitesInfo ? activitesInfo.id : ''
  )
  console.log(activites)
  const [state, setState] = useState({
    company_name: '',
    inn: '',
    legal_address: '',
    actual_address: '',
    telephone: '',
    okpo: '',
    register_number: '',
    field_activity: activitesInfo.id,
  })

  useEffect(() => {
    setActivites(activitesInfo && activitesInfo.id)
  }, [activitesInfo])
  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const { activitesGet } = useSelector((state) => state.activites)
  return (
    <Layout>
      <div className={cl.companies}>
        <div className={cl.companies__category}>
          <h2 className={cl.companies__title}>Наименование компании</h2>
          <input
            className={cl.companies__input}
            type="text"
            onChange={handleInput}
            name="company_name"
          />
        </div>
        <div className={cl.companies__category}>
          <h2 className={cl.companies__title}>Юридический адрес</h2>
          <input
            className={cl.companies__input}
            type="text"
            onChange={handleInput}
            name="legal_address"
          />
        </div>
        <div className={cl.companies__category}>
          <h2 className={cl.companies__title}>Фактический адрес</h2>
          <input
            className={cl.companies__input}
            type="text"
            onChange={handleInput}
            name="actual_address"
          />
        </div>
        <div className={cl.companies__category}>
          <h2 className={cl.companies__title}>Номер телефона</h2>
          <input
            className={cl.companies__input}
            type="text"
            onChange={handleInput}
            name="telephone"
          />
        </div>
        <div className={cl.companies__category}>
          <h2 className={cl.companies__title}>Сфера деятельности</h2>
          {/* <Select
            type="text"
            name="field_activity"
            className={cl.counterparties__accor}
            onChange={(e) => setState({ ...state, status: e })}
            value={activitesInfo && activitesInfo.activites_add}
          >
            {activitesGet &&
              activitesGet.map((item) => (
                <Select.Option name="field_activity" key={item.id}>
                  <ActivitesItem data={item}/>
                </Select.Option>
              ))}
          </Select>
          <BsPlusLg className={cl.add__svg} onClick={showModal} /> */}
          <input
            className={cl.companies__input}
            type="text"
            onChange={handleInput}
            name="field_activity"
          />
        </div>
        <div className={cl.companies__category}>
          <h2 className={cl.companies__title}>Окпо</h2>
          <input
            className={cl.companies__input}
            type="text"
            onChange={handleInput}
            name="okpo"
          />
        </div>
        <div className={cl.companies__category}>
          <h2 className={cl.companies__title}>Инн</h2>
          <input
            className={cl.companies__input}
            type="text"
            onChange={handleInput}
            name="inn"
          />
        </div>
        <div className={cl.companies__category}>
          <h2 className={cl.companies__title}>Регистрационный номер</h2>
          <input
            className={cl.companies__input}
            type="text"
            onChange={handleInput}
            name="register_number"
          />
        </div>
        <Button onClick={handleSubmit}>Опубликовать</Button>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Activites />
        </Modal>
      </div>
    </Layout>
  )
}

export default Companies
