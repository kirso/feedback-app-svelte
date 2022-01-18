import { writable } from "svelte/store"

export const FeedbackStore = writable([
	{
		id: 1,
		rating: 3,
		text: "lorem ipsum alkjsdlfkjalskjdflaksjdf lorem ipsum alkjsdlfkjalskjdflaksjdf lorem ipsum alkjsdlfkjalskjdflaksjdflorem ipsum alkjsdlfkjalskjdflaksjdf"
	},
	{
		id: 2,
		rating: 5,
		text: "lorem ipsum alkjsdlfkjalskjdflaksjdf lorem ipsum alkjsdlfkjalskjdflaksjdf lorem ipsum alkjsdlfkjalskjdflaksjdflorem ipsum alkjsdlfkjalskjdflaksjdf"
	},
	{
		id: 3,
		rating: 10,
		text: "lorem ipsum alkjsdlfkjalskjdflaksjdf lorem ipsum alkjsdlfkjalskjdflaksjdflorem ipsum alkjsdlfkjalskjdflaksjdflorem ipsum alkjsdlfkjalskjdflaksjdf lorem ipsum alkjsdlfkjalskjdflaksjdflorem ipsum alkjsdlfkjalskjdflaksjdflorem ipsum alkjsdlfkjalskjdflaksjdflorem ipsum alkjsdlfkjalskjdflaksjdflorem ipsum alkjsdlfkjalskjdflaksjdflorem ipsum alkjsdlfkjalskjdflaksjdf"
	}
])
