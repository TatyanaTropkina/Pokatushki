import a from "./../images/tracks/1.png";
import b from  "./../images/tracks/2.png";
import c from  "./../images/tracks/3.png";
import d from  "./../images/tracks/4.png";
import e from  "./../images/tracks/5.png";
import f from  "./../images/tracks/6.png";
import g from  "./../images/tracks/7.png";
import i from  "./../images/tracks/9.png";
import j from  "./../images/tracks/10.png";
import k from  "./../images/tracks/11.png";
import l from  "./../images/tracks/12.png";
import m from  "./../images/tracks/13.png";
import n from  "./../images/tracks/14.png";
import o from  "./../images/tracks/15.png";
import p from  "./../images/tracks/16.png";
import q from  "./../images/tracks/17.png";
import r from  "./../images/tracks/18.png";
import s from  "./../images/tracks/19.png";
import t from  "./../images/tracks/20.png";
import v from  "./../images/tracks/22.png";
import w from  "./../images/tracks/23.png";

let state = [
	{
		id: 1,
		path: "гряда Вярямянселькя. Петяярви.",
		screenshot: a,
		track: "https://nakarte.me/#m=12/60.62118/30.06083&l=O&nktl=aPAc1ZXn7Y117tWGQEPHsw",
		distance: 47,
		station: "Новая Охта - Петяярви / Петяярви - Новая Охта",
		there: [
			{
				train: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603609&fromName=Новая+Охта+%28Мурино%29&toId=s9602741&toName=Петяярви&when=завтра"},
				],
				speedTrain: [
					
					{link: ""},
					   
				],
			}
		],
		back: [
			{
				train: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9602741&fromName=Петяярви&toId=s9603609&toName=Новая+Охта+%28Мурино%29&when=завтра"},
				],
				speedTrain: [
					
					{link: ""},
					   
				],
			}
		],

		comments: "Хороший маршрут по экотропам, много черники",
		isTrain: true,
		isCompleted: true,
		isNew: false,
		isDoubleStation: false,
	},
	{
		id: 2,
		path: "Петяярви - экотропа - Сосново",
		screenshot: b,
		track: "https://nakarte.me/#m=12/60.60005/30.15809&l=O&nktl=8csfIaZqLODHWU_q2nvbuw",
		distance: 66,
		station: "Новая Охта - Петяярви / Сосново - Новая Охта",
		there: [
			{
				train: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603609&fromName=Новая+Охта+%28Мурино%29&toId=s9602741&toName=Петяярви&when=завтра"},
				],
				speedTrain: [
					
					{link: ""},
					   
				],
			}
		],
		back: [
			{
				train: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=c10890&fromName=Сосново&toId=s9603609&toName=Новая+Охта+%28Мурино%29&when=завтра"},
				],
				speedTrain: [
					
					{link: ""},
					   
				],
			}
		],
		comments: "",
		isTrain: true,
		isCompleted: false,
		isNew: true,
		isDoubleStation: false,
	},
	{ 
	
		id: 3,
		path: "Станция 54 км - Токсово",
		screenshot: c,
		track: "https://nakarte.me/#m=10/59.90684/30.76447&l=O&nktl=fcUTByJbalstaXbdwrNygQ",
		distance: 52,
		station: "Новая Охта - 54 км / Токсово - Новая Охта",
		there: [
			{
				train: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603609&fromName=Новая+Охта+%28Мурино%29&toId=s9603261&toName=54+км&when=завтра"},
				],
				speedTrain: [
					
					{link: ""},
					   
				],
			}
		],
		back: [
			{
				train: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603261&fromName=54+км&toId=c21147&toName=Токсово&when=завтра"},
				],
				speedTrain: [
					
					{link: ""},
					   
				],
			}
		],
		comments: "Можно поехать дальше до Осельков или Кузьмоловского",
		isTrain: true,
		isCompleted: false,
		isNew: true,
		isDoubleStation: false,
	},
	{

		id: 4,
		path: "Станция 54 км - домой. Вариант 1",
		screenshot: d,
		track: "https://nakarte.me/#m=11/60.11955/30.39148&l=O&nktl=ZCJqldpj6DAEH6FwNY0onA",
		distance: 72,
		station: "Новая Охта - 54 км",
		there: [
			{
				train: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603609&fromName=Новая+Охта+%28Мурино%29&toId=s9603261&toName=54+км&when=завтра"},

				],
				speedTrain: [
					
					{link: ""},
					   
				],
			}
		],
		back: [
			{
				train: [
					
					{link: ""},
					   
				],
				speedTrain: [
					
					{link: ""},
					   
				],
			}
		],
		comments: "",
		isTrain: true,
		isCompleted: false,
		isNew: true,
		isDoubleStation: false,
	},
	{
		id: 5,
		path: "Станция 54 км - домой. Вариант 2",
		screenshot: e,
		track: "https://nakarte.me/#m=13/60.06457/30.43141&l=O&nktl=OdKtxXFWEFgAngvGsqL0uQ",
		distance: 75,
		station: "Новая Охта - 54 км",
		there: [
			{
				train: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603609&fromName=Новая+Охта+%28Мурино%29&toId=s9603261&toName=54+км&when=завтра"},
				],
				speedTrain: [
					
					{link: ""},
					   
				],
			}
		],
		back: [
			{
				train: [
					
					{link: ""},
					   
				],
				speedTrain: [
					
					{link: ""},
					   
				],
			}
		],
		comments: "",
		isTrain: true,
		isCompleted: false,
		isNew: true,
		isDoubleStation: false,
	},
	{
		id: 6,
		path: "Дом - Коркинское озеро - Колтушские высоты / Дом",
		screenshot: f,
		track: "https://nakarte.me/#m=11/59.95453/30.63895&l=O&nktl=uvNJc_Z_STULZPruHAbTHA",
		distance: 71,
		station: "",
		there: [
			{
				train: [
					
					{link: ""},
					   
				],
				speedTrain: [
					
					{link: ""},
					   
				],
			}
		],
		back: [
			{
				train: [
					
					{link: ""},
					   
				],
				speedTrain: [
					
					{link: ""},
					   
				],
			}
		],
		comments: "Хороший маршрут. По асфальту.",
		isTrain: false,
		isCompleted: true,
		isNew: false,
		isDoubleStation: false,
	},
	{
		id: 7,
		path: "Бор - мыс Киперорт - Выборг",
		screenshot: g,
		track: "https://nakarte.me/#m=10/60.60989/28.85147&l=O&nktl=bjtNFJkJaatDqPJZMUJg_Q",
		distance: 84,
		station: "Удельная - Зеленогорск - Бор / Выборг - Удельная",
		there: [
			{
				train: [
					
					{link: ""},
				],
				speedTrain: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603463&fromName=Удельная&toId=s9603446&toName=Бор&when=завтра"},
					 
				],

			}
		],
		back: [
			{
				train: [
					
					{link: ""},
				
				],
				speedTrain: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=c969&fromName=Выборг&toId=s9603463&toName=Удельная&when=завтра"},
					
				],

			}
		],
		comments: "Дорога после экотропы - асфальт. Самый короткий маршрут если не уезжать с Бора или Приморска. Пересадка в Зеленогорске на дизель 20 мин.",
		isTrain: true,
		isCompleted: false,
		isNew: true,
	},
	
	{
		id: 8,
		path: "Гаврилово - озера - Выборг",
		screenshot: i,
		track: "https://nakarte.me/#m=11/60.71727/29.08163&l=O&nktl=efhG26-2-uOyKiCGiGqW8A",
		distance: 84,
		station: "Ланская - Гаврилово / Выборг - Удельная",
		there: [
			{
				train: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603444&fromName=Ланская&toId=s9603654&toName=Гаврилово&when=завтра"},
				],
				speedTrain: [
					
					{link: ""},
				],
			}
		],
		back: [
			{
				train: [
					
					{link: ""},
				],
				speedTrain: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=c969&fromName=Выборг&toId=s9603463&toName=Удельная&when=завтра"},
				],
			}
		],
		comments: "Маршрут чужой. Часть маршрута по лесным тропам. Много озер. Можно уехать на станцию раньше Выборга (Верхнее Черкасово)",
		isTrain: true,
		isCompleted: false,
		isNew: true,
	},
	{
		id: 9,
		path: "Каннельярви - Красногвардейское озеро - Гаврилово",
		screenshot: j,
		track: "https://nakarte.me/#m=12/60.32559/29.36220&l=O&nktl=4CFMC8bX9UBykbdkvD0Kpg",
		distance: "85",
		station: "Удельная - Каннельярви / Гаврилово - Ланская",
		there: [
			{
				train: [
					
					{link: ""},
				],
				speedTrain: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603463&fromName=Удельная&toId=c73117&toName=Каннельярви&when=завтра"},
				],
			}
		],
		back: [
			{
				train: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603654&fromName=Гаврилово&toId=s9603444&toName=Ланская&when=завтра"},
				],
				speedTrain: [
					
					{link: ""},
				],
			}
		],
		comments: "Маршрут в основном по дорогам.",
		isTrain: true,
		isCompleted: false,
		isNew: true,
	},
	{
		id: 10,
		path: "станция 73 км - Красногвардейское озеро - мыс Кюрённиеми - Каннельярви",
		screenshot: k,
		track: "https://nakarte.me/#m=9/60.45993/29.68231&l=O&nktl=6lGXjVLrz6_xL7JLiblDnw",
		distance: 85,
		station: "Ланская - станция 73 км - Каннельярви - Удельная",
		there: [
			{
				train: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603444&fromName=Ланская&toId=s9603862&toName=73+км+%28Шевелёво%29&when=завтрааКа"},
				],
				speedTrain: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603463&fromName=Удельная&toId=c73117&toName=Каннельярви&when=завтра"},
				],
			}
		],
		back: [
			{
				train: [
					
					{link: ""},
				],
				speedTrain: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=c73117&fromName=Каннельярви&toId=s9603463&toName=Удельная&when=завтра"},
				],
			}
		],
		comments: "Можно поехать на ласточке Удельная - Каннельярви и так же обратно. Нужно переделать. У ДОЛ Зеркальный плохая дорога. Тропа вдоль пляжа - песочная. Тропа в Лужки заболоченная. Дорога 41К-092 - с грунтовка колдобинами",
		isTrain: true,
		isCompleted: "Пройден частично",
		isNew: false,
	},
	{
		id: 11,
		path: "Каннельярви - мыс Кюрённиеми - Каннельярви",
		screenshot: l,
		track: "https://nakarte.me/#m=10/60.36975/29.28680&l=O&nktl=VSEFJx9NaU5d7TLwJoFLEQ",
		distance: 82,
		station: "Удельная  - Каннельярви / Каннельярви - Удельная",
		there: [
			{
				train: [
					
					{link: ""},
				],
				speedTrain: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603463&fromName=Удельная&toId=c73117&toName=Каннельярви&when=завтра"},
				],
				  
			}
		],
		back: [
			{
				train: [
					
					{link: ""},
				],
				speedTrain: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=c73117&fromName=Каннельярви&toId=s9603463&toName=Удельная&when=завтра"},
				],
			}
		],
		comments: "Самый короткий маршрут. Все по асфальту. Можно уехать с Кулеомоярви если что.",
		isTrain: true,
		isCompleted: false,
		isNew: true,
	},
	{
		id: 12,
		path: "Зеленогорск - Красногвардейское озеро - Рощино",
		screenshot: m,
		track: "https://nakarte.me/#m=15/60.35666/29.39705&l=O&nktl=Jcw5FrTMvewVAoVZp9tW5g",
		distance: 83,
		station: "Удельная - Зеленогорск / Рощино - Удельная",
		there: [
			{
				   train: [
					
					{link: ""},
				],
				speedTrain: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603463&fromName=Удельная&toId=c24507&toName=Зеленогорск&when=завтра"},
				],
				  
			}
		],
		back: [
			{
				   train: [
					
					{link: ""},
				],
				speedTrain: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=c10885&fromName=Рощино&toId=s9603463&toName=Удельная&when=завтра"},
				],
			}
		],
		comments: "Можно уехать с Каннельярви - 61 км, с Горьковского - 73 км, с Рощино - 83 км. Маршрут по дорогам",
		isTrain: true,
		isCompleted: false,
		isNew: true,
	},
	{
		id: 13,
		path: "Зеленогорск - огибая Гладышевское и Красногвардейское озеро - Каннельярви",
		screenshot: n,
		track: "https://nakarte.me/#m=12/60.31763/29.39729&l=O&nktl=hfgVchttkkvucirZFVYwOQ",
		distance: 72,
		station: "Удельная - Зеленогорск / Каннельярви - Удельная",
		there: [
			{
				train: [
					{link: ""},
				],
				speedTrain: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603463&fromName=Удельная&toId=c24507&toName=Зеленогорск&when=завтра"},
				],


			}
		],
		back: [
			{
				train: [
					
					{link: ""},
				],
				speedTrain: [
					
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=c73117&fromName=Каннельярви&toId=s9603463&toName=Удельная&when=завтра"},
				],
				  
			}
		],
		comments: "Машрут по дорогам, Кроме гладышевского озера",
		isTrain: true,
		isCompleted: false,
		isNew: true,
	},
	{
		id: 14,
		path: "Зеленогорск - Гладышевское озеро - Зеленогорск",
		screenshot: o,
		track: "https://nakarte.me/#m=12/60.27337/29.55906&l=O&nktl=VdTo4UW0K3_lSooE8DDFmA",
		distance: 71,
		station: "Удельная - Зеленогорск / Зеленогорск - Удельная",
		there: [
			{
				train: [
					{link: ""},
				],
				speedTrain: [
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603463&fromName=Удельная&toId=c24507&toName=Зеленогорск&when=завтра"},
				],
			}
		],
		back: [
			{
				train: [
					{link: ""},
				],
				speedTrain: [
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=c24507&fromName=Зеленогорск&toId=s9603463&toName=Удельная&when=завтра"},
				],
			}
		],
		comments: "В основном по дорогам, гладыщевское озеро - лесные тропы. Можно не объезжать озеро, а свернуть на 23 км (всего 66 км). Можно уехать с Горьковской на 45 км или из  Рощино на 58 км. В осовном по шоссе",
		isTrain: true,
		isCompleted: false,
		isNew: true,
	},
	{
		id: 15,
		path: "Зеленогорск - Линдуловская роща - Гладышевская экотропа - Гладышевское озеро - Рощино",
		screenshot: p,
		track: "https://nakarte.me/#m=12/60.26206/29.51985&l=O&nktl=oUKltHbdAtY0YPmVXBuLYg",
		distance: 75,
		station: "Удельная - Зеленогорск / Рощино - Удельная",
		there: [
			{
				train: [
					{link: ""},
				],
				speedTrain: [
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603463&fromName=Удельная&toId=c24507&toName=Зеленогорск&when=завтра"},
				],
				  
			}
		],
		back: [
			{
				train: [
					{link: ""},
				],
				speedTrain: [
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=c10885&fromName=Рощино&toId=s9603463&toName=Удельная&when=завтра"},
				],
				  
			}
		],
		comments: "Гладышевская экотропа идет вдоль ручья, может быть не в лучшем состоянии. С половины тропы можно уйти на дорогу. Можно не объезжать вокруг озера. Можно уехать со станции 73 км (маршрут 61 км)",
		isTrain: true,
		isCompleted: "",
		isNew: true,
	},
	{
		id: 16,
		path: "Медное и Пасторское озеро",
		screenshot: q,
		track: "https://nakarte.me/#m=11/60.06073/30.32625&l=O&nktl=5gjXbnro6nKYLidyaDG7sw",
		distance: 88,
		station: "",
		there: [
			{
				   train: [
					
					{link: ""},
				],
				speedTrain: [
					
					{link: ""},
				],
				  
			}
		],
		back: [
			{
				   train: [
					
					{link: ""},
				],
				speedTrain: [
					
					{link: ""},
				],
				  
			}
		],
		comments: "Если от полей повернуть направо и ехать через ленту, то километраж получится такой же. На 63 км можно ехать по Советской улице и дальше повернуть на Горское шоссе, а не поворачивать Ленинградскую улицу, тк в Левашово нужно переходить пути сверху по переходу. Половина пути по шоссе",
		isTrain: false,
		isCompleted: "Пройден до медного озера",
		isNew: true,
	},
	{
		id: 17,
		path: "54 км - маяк Сайнасаари - Сосново",
		screenshot: r,
		track: "https://nakarte.me/#m=13/60.56791/30.60637&l=O&nktl=SI03f97E32vbUyT-7Qel7g",
		distance: 69,
		station: "Новая охта - 54 КМ / Сосново - Новая Охта",
		there: [
			{
				train: [
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603609&fromName=Новая+Охта+%28Мурино%29&toId=s9603261&toName=54+км&when=завтра"},
				],
				speedTrain: [
					
					{link: ""},

				],
				  
			}
		],
		back: [
			{
				train: [
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=c10890&fromName=Сосново&toId=s9603609&toName=Новая+Охта+%28Мурино%29&when=завтра"},
				],
				speedTrain: [
					
					{link: ""},

				],
				  
			}
		],
		comments: "Можно не заезжать на мыс Резной, а вернуться по Центральной улице, затем повернуть на Раздольную улицу, тогда получится 66 км. Дорого туда частично по шоссе, жирным тропам и грунтовой дороге, обратно - по шоссе. (Маршрут с сайта велопитер).",
		isTrain: true,
		isCompleted: false,
		isNew: true,
	},
	{
		id: 18,
		path: "Отрадное - Приозерск",
		screenshot: s,
		track: "https://nakarte.me/#m=11/60.95378/30.24536&l=O&nktl=jUY4J0TGonaw7wm8fOyXyQ",
		distance: 56,
		station: "Новая Охта - Отрадное / Приозерск - Новая Охта",
		there: [
			{
				   train: [
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603609&fromName=Новая+Охта+%28Мурино%29&toId=s9602745&toName=Отрадное&when=завтра"},
				],
				speedTrain: [
					
					{link: ""},
				],
				  
			}
		],
		back: [
			{
				   train: [
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603177&fromName=Приозерск&toId=s9603609&toName=Новая+Охта+%28Мурино%29&when=завтра"},
				],
				speedTrain: [
					
					{link: ""},
				],
				  
			}
		],
		comments: "Начало пути по асфальту, затем по грунту и затем по лесной дороге (жирный пунктир). Если лесная дорога будет плохая можно свернуть на грунтовую дорогу 41К-012 на 21 км, 23 км, 25 км или 30 км. После маяка асфальт, можно поехать не в Приозерск, а на станцию Синево (~10 км, всего ~59 км).",
		isTrain: true,
		isCompleted: "",
		isNew: true,
	},
	{
		id: 19,
		path: "Кузнечное - Каменногорск - Выборг",
		screenshot: t,
		track: "https://nakarte.me/#m=9/60.99868/29.62463&l=O&nktl=eKMxUerrBG1mZeg-jEorEg",
		distance: 105,
		station: "Новая Охта - Кузнечное / Выборг - Удельная",
		there: [
			{

				train: [
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=s9603609&fromName=Новая+Охта+%28Мурино%29&toId=s9602748&toName=Кузнечное&when=завтра"},
				],
				speedTrain: [
					
					{link: ""},
				],
				  
			}
		],
		back: [
			{
				train: [
					{link: ""},
				],
				speedTrain: [
					{link: "https://t.rasp.yandex.ru/search/suburban/?fromId=c969&fromName=Выборг&toId=s9603463&toName=Удельная&when=завтра"},
				],
				  
			}
		],
		comments: "Маршрут с сайта велопитер. 60 км в начале по грунтовке, затем по лесным дорогам. Маршрут идет вдоль жд ветки, электрички ходят раз в день, днем. ",
		isTrain: true,
		isCompleted: false,
		isNew: true,
	},
	{
		id: 20,
		path: "Кузнечное - Лосево",
		screenshot: v,
		track: "https://nakarte.me/#m=10/60.89331/30.02591&l=O&nktl=U4epEKZ84mSay65mZFwnuQ",
		distance: 60,
		station: "Новая Охта - Кузнечное / Лосево - Новая Охта",
		there: [
			{
				train: [
					{link: "https://rasp.yandex.ru/search/suburban/?fromId=s9603609&fromName=Новая+Охта+(Мурино)&toId=s9602748&toName=Кузнечное&when=завтра"},
				],
				speedTrain: [
					
					{link: ""},
				],
				  
			}
		],
		back: [
			{
				train: [
					
					{link: "https://rasp.yandex.ru/search/suburban/?fromId=c85072&fromName=Поселок+ж%2Fд+станции+Лосево&toId=s9603609&toName=Новая+Охта+(Мурино)&when=завтра"},
				],
				speedTrain: [
					
					{link: ""},
				],
				  
			}
		],
		comments: "с Кузнечного до Севастьяного отличная дорога, далее 15 км по грейдеру, он не самый плохой, дорога пыльная, c Мельниково разбитый асфальт и узкая обочина, без крутых горок. Можно с Мельниково поехать до станции Мюллепельно, тогда будет 50 км.",
		isTrain: true,
		isCompleted: "true",
		isNew: false,
	},
	{
		id: 21,
		path: "Гаврилово - Рощино",
		screenshot: w,
		track: "https://nakarte.me/#m=10/60.41738/29.36536&l=O&nktl=1vBvCs3VcdedlIOvd-hZMA",
		distance: 67,
		station: "Ланская - Гаврилово / Рощино - Удельная",
		there: [
			{
				train: [
					
					{link: "https://rasp.yandex.ru/search/suburban/?fromId=s9603444&fromName=Ланская&toId=s9603654&toName=Гаврилово&when=завтра"},
				],
				speedTrain: [
					
					{link: ""},
				],
				  
			}
		],
		back: [
			{
				train: [
					
					{link: ""},
				],
				speedTrain: [
					
					{link: "https://rasp.yandex.ru/search/suburban/?fromId=s9603576&fromName=Рощино&toId=s9603463&toName=Удельная&when=завтра"},
				],
				  
			}
		],
		comments: "Маршрут полностью по асфальту. Можно доехать до Зеленогорская, будет 74 км.",
		isTrain: true,
		isCompleted: "false",
		isNew: false,
	},

]
export default state;
