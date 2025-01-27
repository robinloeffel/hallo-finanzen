export const formatDate = (
	dateTime: string
) => new Intl.DateTimeFormat("de-CH", {
	day: "numeric",
	month: "long",
	year: "numeric"
}).format(new Date(dateTime));
