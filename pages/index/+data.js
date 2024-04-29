import { store } from "../../server"

export const data = async () => {
	return { tckimlikno: 50 + 8, date: new Date().toLocaleString(), count: store.count++ }
}