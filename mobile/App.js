import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { Text, View } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}

// Usar div pra tudo, teg View e Text (Qualquer tipo de Texto)
// Para estilizar, temo que usar style + a stilização
// Stylesheet.create({pra criar as estilizações}
// Todos elementos utilizam display flex por padrão
// Onde tiver - coloque a próxima letra em caixa alta, cor center, tem que ter ' '
// Não tem herança de estilos no react native
// Estilização própria por elemento