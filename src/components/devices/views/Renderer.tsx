import type { ReactElement } from 'react';
import React from 'react';
import { CategoryHeader, Green, ImportantCategoryHeader, Red, SmallHeader } from '../../customs';
import { EFeaturesStatus, ENoteType } from '../../../enums';
import type { IDevice, INotes } from '../../../redux/types';
import { DeviceFeature } from '../themed';

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
      <SmallHeader>Features:</SmallHeader>
      <States />
      {Object.entries(device.features).map(([category, features]) => {
        return (
          <div key={category}>
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
          </div>
        );
      })}
    </>
  );
};

export const renderInnerNote = (note: INotes): ReactElement | ReactElement[] => {
  switch (note.type) {
    case ENoteType.List:
      return (
        <ul>
          {note.data.map((e) => {
            return <li key={e}>{e}</li>;
          })}
        </ul>
      );
    case ENoteType.String:
    default:
      return note.data.map((e) => {
        return <li key={e}>{e}</li>;
      });
  }
};

export const renderNote = (note: Record<string, INotes>): ReactElement[] => {
  return Object.entries(note).map((e) => {
    return (
      <>
        <CategoryHeader>{e[0]}</CategoryHeader>
        {renderInnerNote(e[1])}
      </>
    );
  });
};

export const renderNotes = (device: IDevice): ReactElement | null => {
  return !device.notes || Object.entries(device.notes)?.length <= 0 ? null : (
    <>
      <SmallHeader>Notes</SmallHeader>
      {Object.entries(device.notes).map((e) => {
        return (
          <>
            <ImportantCategoryHeader key={e[0]}>{e[0]}</ImportantCategoryHeader>
            {typeof e[1] === 'object' ? renderNote(e[1]) : e[1]}
          </>
        );
      })}
    </>
  );
};

export const renderDescription = (device: IDevice): ReactElement | null => {
  return !device.description ? null : <p>{device.description}</p>;
};
