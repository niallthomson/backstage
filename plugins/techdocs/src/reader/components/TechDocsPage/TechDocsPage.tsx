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

import React from 'react';
import { useOutlet } from 'react-router';

import { Page } from '@backstage/core-components';
import { EntityName } from '@backstage/catalog-model';
import { techDocsPage } from '@backstage/plugin-techdocs-mkdocs';

import { TechDocsEntityMetadata, TechDocsMetadata } from '../../../types';
import { LegacyTechDocsPage } from './LegacyTechDocsPage';
import { TechDocsPageProvider } from './context';

export type TechDocsPageRenderParams = {
  onReady: () => void;
  entityRef: EntityName;
  entityMetadataValue?: TechDocsEntityMetadata | undefined;
  techdocsMetadataValue?: TechDocsMetadata | undefined;
};

export type TechDocsPageRenderFunction = (
  params: TechDocsPageRenderParams,
) => JSX.Element;

export type TechDocsPageProps = {
  children?: TechDocsPageRenderFunction | React.ReactNode;
};

export const TechDocsPage = ({ children }: TechDocsPageProps) => {
  const outlet = useOutlet();

  if (!children)
    return (
      outlet || (
        <TechDocsPageProvider>
          <LegacyTechDocsPage>{techDocsPage}</LegacyTechDocsPage>
        </TechDocsPageProvider>
      )
    );

  return (
    <Page themeId="documentation">
      <TechDocsPageProvider>{children}</TechDocsPageProvider>
    </Page>
  );
};
