const data = [
  {
    id: 1,
    word: "Event Loop",
    meaning:
      "В основе Node.js лежит концепция цикла событий (event loop), который позволяет ему обрабатывать асинхронные операции, такие как ввод-вывод или запросы к базе данных, без блокировки главного потока. Это достигается путем откладывания длительных операций и их выполнения в фоне.",
    source:
      "Medium [Электронный ресурс]. - URL: https://medium.com/devschacht/event-loop-timers-and-nexttick-18579cd122e0 (дата обращения 20.01.2024).",
  },
  {
    id: 2,
    word: "Non-blocking I/O",
    meaning:
      "Благодаря асинхронной природе, Node.js может обрабатывать множество запросов одновременно, что делает его очень эффективным для создания веб-серверов и API.",
    source:
      "Medium [Электронный ресурс]. - URL: https://medium.com/devschacht/event-loop-timers-and-nexttick-18579cd122e0 (дата обращения 20.01.2024).",
  },
  {
    id: 3,
    word: "CPU-bound",
    meaning:
      "В компьютерных науках считается, что задача, работа или процесс привязаны к центральному процессору, когда время, необходимое для их выполнения, определяется главным образом скоростью центрального процессора.",
    source:
      "Wikipedia [Электронный ресурс]. - URL: https://en.wikipedia.org/wiki/CPU-bound (дата обращения 20.01.2024).",
  },
  {
    id: 4,
    word: "Асинхронное программирование",
    meaning:
      "концепция программирования, которая заключается в том, что результат выполнения функции доступен не сразу же, а через некоторое время в виде некоторого асинхронного вызова.",
    source:
      "Wikipedia [Электронный ресурс]. - URL: https://en.wikipedia.org/wiki/Asynchrony_(computer_programming) (дата обращения 20.01.2024).",
  },
  {
    id: 5,
    word: "Масштаби́руемость",
    meaning:
      "в электронике и информатике означает способность системы, сети или процесса справляться с увеличением рабочей нагрузки (увеличивать свою производительность) при добавлении ресурсов (обычно аппаратных).",
    source:
      "Wikipedia [Электронный ресурс]. - URL: https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%81%D1%88%D1%82%D0%B0%D0%B1%D0%B8%D1%80%D1%83%D0%B5%D0%BC%D0%BE%D1%81%D1%82%D1%8C (дата обращения 20.01.2024).",
  },
  {
    id: 5,
    word: "Поток",
    meaning:
      "это наименьшая единица обработки, которая может быть выполнена операционной системой.",
    source:
      "learn.microsoft [Электронный ресурс]. - URL: https://learn.microsoft.com/ru-ru/dotnet/standard/threading/threads-and-threading",
  },
  {
    id: 6,
    word: "Параллелизм",
    meaning:
      "Одновременное выполнение нескольких потоков на многоядерных процессорах.",
    source:
      "Wikipedia [Электронный ресурс]. - URL: https://en.wikipedia.org/wiki/Concurrency_(computer_science)",
  },
  {
    id: 7,
    word: "Deadlock",
    meaning:
      "Состояние, в котором два или более потоков бесконечно ожидают ресурсов, захваченных другими потоками.",
    source:
      "Wikipedia [Электронный ресурс]. - URL: https://ru.wikipedia.org/wiki/%D0%92%D0%B7%D0%B0%D0%B8%D0%BC%D0%BD%D0%B0%D1%8F_%D0%B1%D0%BB%D0%BE%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0",
  },
];

export default data;
