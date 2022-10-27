import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import cl from './companies.module.scss'
import { useDispatch } from 'react-redux'
import { fetchActivites } from '../../features/company/activitySlise'

const Activites = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchActivites())
  }, [dispatch])
  const handleSubmitModal = () => {
    dispatch(fetchActivites(state))
    console.log(state)
  }

  const [state, setState] = useState({
    activites_add: '',
  })
  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  return (
    <div className={cl.companies__category}>
      <h2 className={cl.companies__title}>Сфера деятельности</h2>
      <input
        className={cl.companies__input}
        type="text"
        onChange={handleInput}
        name="activites_add"
      />
      <Button onClick={handleSubmitModal}>Submit</Button>
    </div>
  )
}

export default Activites
