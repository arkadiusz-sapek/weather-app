import { createAsyncAction } from 'typesafe-actions';

import { HttpError } from 'common/models/httpErrorModels';

import { Weather } from './../models/weatherModel';
import { Place } from './../models/placeModel';

export const searchPlacesByPhraseAsync = createAsyncAction(
    'GET_PLACES_REQUESTED',
    'GET_PLACES_SUCCEED',
    'GET_PLACES_FAILED',
)<string, Place[], HttpError>();

export const getWeatherAsync = createAsyncAction(
    'GET_WEATHER_REQUESTED',
    'GET_WEATHER_SUCCEED',
    'GET_WEATHER_FAILED',
)<number, Weather, HttpError>();
