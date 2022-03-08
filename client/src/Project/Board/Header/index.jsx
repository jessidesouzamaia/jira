import React from 'react';

import { Button } from 'shared/components';

import { Header, BoardName } from './Styles';

const ProjectBoardHeader = () => (
  <Header>
    <BoardName>Acorde Sprint</BoardName>
    <a href="/" target="_blank" rel="noreferrer noopener">
      <Button>Concluir Sprint</Button>
    </a>
  </Header>
);

export default ProjectBoardHeader;
