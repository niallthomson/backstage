/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { FC } from 'react';

import { Page, Content } from '@backstage/core-components';

import { TechDocsPageHeader } from '../TechDocsPageHeader';
import { Reader } from '../Reader';

import { useTechDocsPage } from './context';

export const LegacyTechDocsPage: FC = ({ children }) => {
  const { onReady, entityRef, entityMetadataValue, techdocsMetadataValue } =
    useTechDocsPage();

  return (
    <Page themeId="documentation">
      <TechDocsPageHeader
        entityRef={entityRef}
        entityMetadata={entityMetadataValue}
        techDocsMetadata={techdocsMetadataValue}
      />
      <Content data-testid="techdocs-content">
        <Reader onReady={onReady} entityRef={entityRef}>
          {children}
        </Reader>
      </Content>
    </Page>
  );
};
