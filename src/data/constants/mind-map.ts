const data = {
  nodes: [
    {
      id: "-8",
      value: {
        title: "Модуль cluster",
      },
    },
    {
      id: "-7",
      value: {
        title: "Библиотека worker_threads",
      },
    },
    {
      id: "-6",
      value: {
        title: "Node js",
      },
    },
    {
      id: "-5",
      value: {
        title: "V8",
      },
    },
    {
      id: "-4",
      value: {
        title: "Event loop",
      },
    },
    {
      id: "-3",
      value: {
        title: "LibUV",
      },
    },
    {
      id: "0",
      value: {
        title: "Многопоточное программирование  ",
      },
    },
    {
      id: "1",
      value: {
        title: "Асинхронные Операции Ввода-Вывода",
      },
    },

    {
      id: "3",
      value: {
        title: "deadlock",
        items: [
          {
            text: "Взаимное блокирование потоков",
          },
        ],
      },
    },
  ],
  edges: [
    {
      source: "-6",
      target: "0",
    },
    {
      source: "-4",
      target: "-3",
      value: "механизм",
    },
    {
      source: "-5",
      target: "-6",
      value: "движок",
    },
    {
      source: "-3",
      target: "-6",
      value: "библиотека",
    },
    {
      source: "-8",
      target: "0",
      value: "метод",
    },
    {
      source: "-7",
      target: "0",
      value: "метод",
    },
    {
      source: "1",
      target: "-4",
      value: "метод",
    },
    {
      source: "3",
      target: "0",
      value: "проблема",
    },
  ],
};

export default data;
