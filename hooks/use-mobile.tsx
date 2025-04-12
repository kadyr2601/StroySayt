"use client"

import { useState, useEffect } from "react"

// Хук для определения мобильного устройства по ширине экрана
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Проверка ширины экрана при первом рендере
    checkIfMobile()

    // Слушаем изменение размера окна
    window.addEventListener("resize", checkIfMobile)

    // Очистка слушателя при размонтировании
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Функция для определения мобильного устройства
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth < 768)
  }

  return isMobile
}
