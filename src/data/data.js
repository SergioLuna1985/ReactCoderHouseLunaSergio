const products = [
    {
      id: "Grt223",
      name: "Arduino Nano 33 IoT",
      description: "El Arduino Nano 33 IoT es el punto de entrada más fácil y barato para mejorar los dispositivos existentes (y crear otros nuevos) para que formen parte del IoT y diseñen aplicaciones de pico-red. Ya sea que esté buscando construir una red de sensores conectada a su oficina o enrutador doméstico, o Si desea crear un dispositivo Bluetooth® de baja energía que envíe datos a un teléfono celular, el Nano 33 IoT es su solución integral para muchos de los escenarios básicos de aplicaciones de IoT. El procesador principal de la placa es un Arm® Cortex-M0® de 32 bits de baja potencia SAMD21. La conectividad WiFi y Bluetooth® se realiza con un módulo de u-blox, el NINA-W10, un chipset de bajo consumo que opera en el rango de 2,4 GHz. Además de eso, la comunicación segura está garantizada a través del chip criptográfico Microchip® ECC608. Además de eso, puedes encontrar una IMU de 6 ejes, lo que hace que esta placa sea perfecta para sistemas de alarma de vibración simples, podómetros, posicionamiento relativo de robots, etc.",
      price: 31724.3,
      stock: 10,
      image: "/img/ABX00027_03.front_643x483.webp",
      category: "arduino"
    },
    {
      id: "Grt224",
      name: "Arduino Nano RP2040 Connect with headers",
      description: "Conozca la única placa RP2040 conectada. Se adapta al factor de forma Arduino Nano, lo que la convierte en una placa pequeña con GRANDES características. El cerebro de la placa es el silicio Raspberry Pi® RP2040; un ARM® Cortex® de doble núcleo M0+ funcionando a 133MHz. Tiene 264 KB de SRAM y los 16 MB de memoria flash están fuera del chip para brindarle almacenamiento adicional. Pero lo realmente emocionante son las opciones de conectividad a bordo. El módulo de radio u-blox NINA-W102, enormemente popular y altamente adaptable, está ahí para hacer de este un verdadero campeón de IoT. Esto también significa que puede aprovechar el poder de la nube, con total compatibilidad con Arduino Cloud. También tiene sensores integrados para convertir tus compilaciones en proyectos potentes. El micrófono y la detección de movimiento añaden una profundidad de posibilidades que es casi imposible de encontrar en una placa de este tamaño. El Arduino Nano RP2040 Connect es la opción premium para los dispositivos RP2040 y la opción perfecta para actualizar tus proyectos y desbloquear el potencial de otros nuevos.",
      price: 36096.2,
      stock: 4,
      image: "/img/ABX00053_03.front_643x483.webp",
      category: "arduino"
    },
    {
      id: "Hff556",
      name: "Raspberry Pi Pico Rp2040",
      description: "Diseñado por Raspberry Pi, el RP2040 cuenta con un procesador Arm Cortex-M0+ de doble núcleo con 264 kB de RAM interna y soporte para hasta 16 MB de flash fuera del chip. Una amplia gama de opciones de E/S flexibles incluye I2C, SPI y, de forma única, E/S programables (PIO). Estos admiten un sinfín de aplicaciones posibles para este paquete pequeño y asequible.",
      price: 22690,
      stock: 5,
      image: "/img/D_NQ_NP_723187-MLA49357707106_032022-O.webp",
      category: "raspberry"
    },
    {
      id: "Hff557",
      name: "Raspberry Pi 5",
      description: "Raspberry Pi 5: La quinta generación de Raspberry Pi irrumpe en el mercado ofreciendo un gran avance respecto a la anterior Raspberry Pi 4 y presenta novedades muy esperadas y deseadas que la hacen la placa SBC más avanzada en su categoría. Con un procesador Arm Cortex-A76 de cuatro núcleos y 64 bits que opera a una frecuencia de 2,4 GHz, la Raspberry Pi 5 ofrece un aumento significativo de 2-3 veces en el rendimiento de la CPU en comparación con la Raspberry Pi 4. Además, presenta mejoras en el rendimiento gráfico gracias a una GPU VideoCore VII de 800MHz. También cuenta con la capacidad de salida de video en pantalla dual y puede alcanzar una resolución de 4Kp60 a través de la conexión micro HDMI. Además, la Raspberry Pi 5 ofrece soporte para cámaras de última generación mediante un procesador de señal de imagen Raspberry Pi rediseñado. Esto proporciona una experiencia de escritorio mejorada para los consumidores y abre nuevas posibilidades de aplicaciones para los clientes industriales.",
      price: 145500,
      stock: 17,
      image: "/img/D_NQ_NP_961213-MLU74366735208_022024-O.webp",
      category: "raspberry"
    },
    {
      id: "Wre442",
      name: "Nodemcu Esp32 Wifi bluetooth 4.2 Iot Wroom Esp32s 38 Pines",
      description: "Esta placa de desarrollo te permite hacer proyectos con la plataforma ESP32. Tiene WiFi y Bluetooth 4.2 gracias al procesador doble núcleo Tensilica Xtensa LX6. La plataforma ESP32 ofrece WiFi, Bluetooth y BLE. Tiene un CPU de dos nucleos de hasta 240Mhz que se pueden controlar independientemente. Ademas integra internamente una gran cantidad de perifericos incluyendo: sensores tactiles capacitivos, sensor de efecto Hall, amplificadores de bajo ruido, interfaz para tarjeta SD, Ethernet, SPI de alta velocidad, UART y I2S e I2C.",
      price: 14499,
      stock: 2,
      image: "/img/D_NQ_NP_709990-MLA80137351973_102024-O.webp",
      category: "esp"
    },
    {
      id: "Wre443",
      name: "Nodemcu Wifi Esp8266 Amica V3 Esp12f 4mb Uart Arduino Nubbeo",
      description: "Es un módulo de desarrollo de Firmware abierto que ayuda a realizar rápidos prototipos con pocas lineas de código en lenguaje LUA. Basada en el módulo WiFi ESP8266, integra GPIO, I2C, PWM, 1-Wire y ADC en una sola tarjeta. Además Posee una API avanzada para el control de entradas y salidas, lo que puede reducir drásticamente el trabajo para configurar y manipular hardware. El código de programación es similar a Arduino, pero de forma interactiva en Lua Script. Event-driven API para aplicaciones de red, lo cual facilita a desarrolladores que escriben código en Nodejs.",
      price: 19364.8,
      stock: 6,
      image: "/img/D_NQ_NP_901291-MLA31134760866_062019-O.webp",
      category: "esp"
    },
  ]

  
  //Obtener productos
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      //Simulamos un retraso de red
      setTimeout( ()=>{
        resolve(products)
      }, 1000 )
    })
  }
  
  export { getProducts }