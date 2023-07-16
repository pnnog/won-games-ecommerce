import {
  ArrowBackIos as ArrowLeft,
  Close,
} from '@styled-icons/material-outlined';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined';

import { SlickButtonFix } from '../../utils/fix-slick-types';

import Slider, { SliderSettings } from 'components/Slider';
import * as S from './styles';
import { useEffect, useRef, useState } from 'react';
import SlickSlider from 'react-slick';

type thumb = {
  title: string;
  src: string;
};

export type GalleryProps = {
  thumbs: thumb[];
};

const commonSettings: SliderSettings = {
  infinite: false,
  arrows: true,
  dots: false,
  nextArrow: (
    <SlickButtonFix>
      <ArrowRight aria-label="Next thumb" size={20} />
    </SlickButtonFix>
  ),

  prevArrow: (
    <SlickButtonFix>
      <ArrowLeft aria-label="Previous thumb" size={20} />
    </SlickButtonFix>
  ),
};

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3.4,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3.1,
      },
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.8,
      },
    },

    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2.4,
      },
    },

    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1.5,
      },
    },
  ],
};

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1,
};

const Gallery = ({ thumbs }: GalleryProps) => {
  const [isVisible, setIsVisible] = useState(false);
  {
    /* 5 - Cria uma referência para o slider. Ele é do tipo SlickSlider e irá receber todas as suas caractrística*/
  }
  const slider = useRef<SlickSlider>(null);

  /* 3- Cria um método para monitorar evento de teclado e fechar o modal com ESC */
  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsVisible(false);
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, []);

  return (
    <S.Wrapper>
      {/*Primeiro cria o slider de baixo, com suas settings e um onclick */}
      {/*Chama a referência no slider */}
      <Slider ref={slider} settings={settings}>
        {thumbs.map((thumb, index) => (
          <img
            role="button"
            key={thumb.title}
            src={thumb.src}
            alt={thumb.title}
            onClick={() => {
              setIsVisible(true);
              slider.current?.slickGoTo(index, true);
            }}
          />
        ))}
      </Slider>

      {/*  2 - Cria o modal que será aberto pelo slider 1. Dentro do modal insere o botão de fechamento  */}

      <S.Modal aria-label="modal" aria-hidden={!isVisible} isOpen={isVisible}>
        <S.Close
          role="button"
          aria-label="Fechar o card"
          onClick={() => setIsVisible(false)}
        >
          <Close size={40} />
        </S.Close>

        {/* 4 - Insere conteúdo do modal com um novo slider com novas settings */}
        <S.ModalContent>
          <Slider ref={slider} settings={modalSettings}>
            {thumbs.map((thumb) => (
              <img
                width={1200}
                height={675}
                key={thumb.title}
                src={thumb.src}
                alt={`gallery-${thumb.title}`}
              />
            ))}
          </Slider>
        </S.ModalContent>
      </S.Modal>
    </S.Wrapper>
  );
};

export default Gallery;
