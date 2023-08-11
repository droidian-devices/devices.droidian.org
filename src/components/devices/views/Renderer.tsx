import type { ReactElement } from 'react';
import React from 'react';
import { CategoryHeader, Green, ImportantCategoryHeader, Red, SmallHeader } from '../../customs';
import { EFeaturesStatus, ENoteType } from '../../../enums';
import { DeviceFeature, FeatureContainer } from '../themed';
import { generateRandomName } from '../util';
import type { IDevice, INotes } from '../../../types';

export const States: React.FC = () => {
  return (
    <ul>
      <li>
        <Green>
          <i className="icon-ok-squared" />
        </Green>
        Working
      </li>
      <li>
        <Green>
          <i className="icon-puzzle" />
        </Green>
        Partly working
      </li>
      <li>
        <Red>
          <i className="icon-cancel" />
        </Red>
        Not working
      </li>
      <li>
        <i className="icon-help" /> Untested
      </li>
    </ul>
  );
};

export const renderIcon = (item: EFeaturesStatus): ReactElement => {
  switch (item) {
    case EFeaturesStatus.Partly:
      return (
        <Green>
          <i className="icon-puzzle" />
        </Green>
      );
    case EFeaturesStatus.Working:
      return (
        <Green>
          <i className="icon-ok-squared" />
        </Green>
      );
    case EFeaturesStatus.Untested:
      return <i className="icon-help" />;
    case EFeaturesStatus.NotWorking:
    default:
      return (
        <Red>
          <i className="icon-cancel" />
        </Red>
      );
  }
};

export const renderFeatures = (device: IDevice): ReactElement | null => {
  return !device.features || Object.entries(device.features)?.length <= 0 ? null : (
    <>
      <SmallHeader $full>Features:</SmallHeader>
      <States />
      {Object.entries(device.features).map(([category, features]) => {
        return (
          <FeatureContainer key={category}>
            <CategoryHeader>{category}</CategoryHeader>
            {Object.entries(features).map((d) =>
              d[1].map((e) => {
                return (
                  <DeviceFeature key={e}>
                    {e}
                    {renderIcon(d[0] as EFeaturesStatus)}
                  </DeviceFeature>
                );
              }),
            )}
          </FeatureContainer>
        );
      })}
    </>
  );
};

export const renderString = (note: string): ReactElement => {
  const splitted = note.split('#{');
  const targets: string[] = [];

  for (let x = 0; x <= splitted.length; x++) {
    if (x !== splitted.length && x !== 0) {
      const target = splitted[x]!.split('}');
      targets.push(target[0]!);
    }
  }

  console.log('note');
  console.log(note);
  console.log('targets');
  console.log(targets);

  return <>{note}</>;
};
export const renderList = (note: INotes<ENoteType.List>): ReactElement | ReactElement[] => {
  return (
    <ul key={generateRandomName()}>
      {note.data.map((e) => {
        return typeof e === 'string' ? <li key={e}>{e}</li> : renderList(e as INotes<ENoteType.List>);
      })}
    </ul>
  );
};

export const renderNote = (note: INotes<ENoteType>[]): ReactElement | ReactElement[] => {
  return note.map((e) => {
    switch (e.type) {
      case ENoteType.List:
        return (
          <ul key={generateRandomName()}>
            {(e as INotes<ENoteType.List>).data.map((e) => {
              return typeof e === 'string' ? <li key={e}>{e}</li> : renderList(e as INotes<ENoteType.List>);
            })}
          </ul>
        );
      case ENoteType.Header:
        return <CategoryHeader>{(e as INotes<ENoteType.Header>).data}</CategoryHeader>;
      case ENoteType.String:
      default:
        return <p>{(e as INotes<ENoteType.String>).data}</p>;
      // return note.data
      //   .filter((e) => typeof e === 'string')
      //   .map((e) => <p key={e as string}>{renderString(e as string)}</p>);
    }
  });
};

export const renderNotes = (device: IDevice): ReactElement | null => {
  return !device.notes || Object.entries(device.notes)?.length <= 0 ? null : (
    <>
      <SmallHeader>Notes</SmallHeader>
      {Object.entries(device.notes).map((e) => {
        return (
          <React.Fragment key={e[0]}>
            <ImportantCategoryHeader>{e[0]}</ImportantCategoryHeader>
            {renderNote(e[1])}
          </React.Fragment>
        );
      })}
    </>
  );
};

export const renderDescription = (device: IDevice): ReactElement | null => {
  return !device.description ? null : <p>{device.description}</p>;
};
