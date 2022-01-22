import axios, { AxiosInstance } from 'axios'
import { useState } from 'react'
import {baseUrl} from "config";

type TError = {
	title?: string
	message: string
	statusCode: number
}

interface IAxios {
	axios: AxiosInstance
	loading: boolean
	errors: Array<TError>
}

const instance = axios.create({
	baseURL: baseUrl,
})

const useAxios = (): IAxios => {
	const [loading, setLoading] = useState(0)
	const [errors, setError] = useState<Array<TError>>([])

	const addError = (error: TError) => {
		const isError = errors.find(e => e.message = error.message)
		if (!isError) {
			setError(prevState => [...prevState, { ...error, title: error.title || 'Error!' }])
			setTimeout(() => {
				setError(prevState => {
					return prevState.filter(e => e.message !== error.message)
				})
			}, 5000)
		}
	}

	instance.interceptors.request.use((config) => {
		setLoading(prev => prev + 1)

		return config
	}, (rej) => {
		setLoading(prev => prev - 1)

		return rej
	})

	instance.interceptors.response.use((config) => {
		setLoading(prev => prev - 1)

		return config
	}, (reject) => {
		setLoading(prev => prev - 1)
		const { response } = reject
		if (response) {
			addError({ message: response.statusText, statusCode: response.status })
		} else {
			addError({ message: reject.message, statusCode: 500 })
		}
		return reject
	})


	return { axios: instance, loading: loading > 0, errors }
}

export {instance as axios}

export default useAxios
