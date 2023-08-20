import a from "./../images/1.png";
import b from "./../images/2.jpg"
let state = [
	{ 
	
		id: 1,
		path: "гряда Вярямянселькя. Петяярви.",
		screenshot: a,
		track: "https://nakarte.me/#m=12/60.61663/30.02014&l=O&nktl=vxalJdqocm1Zlg3PC-heYw",
		distance: "47",
		station: "Новая Охта - Петяярви",
		there: [
			{
				time: "9:56",
				coast: "222",
			}
		],
		back: [
			{
				time: "16:11 17:37 20:07 21:39",
				coast: "222",
			}
		],
		comments: "Хороший маршрут, много черники",
	},
	{ 
	
		id: 2,
		path: "Станция 54 км - Токсово",
		screenshot: b,
		track: "https://nakarte.me/#m=10/60.28613/30.48376&l=O&nktl=gdbaop8e28cyNiOHMRGG5Q",
		distantion: "52",
		station: "Новая Охта - 54 км - Токсово - Новая Охта",
		there: [
			{
				time: "9:02 9:56 10:50 11:55", 
				coast: "128 - 146",
			}
		],
		back: [
			{
				time: "22:48 - последняя",
				coast: "54",
			}
		],
		comments: "Можно поехать дальше до Осельков или Кузьмоловского",

	},
]
export default state;