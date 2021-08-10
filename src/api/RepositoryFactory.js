import GameRepository from './gameRepository';
import StreamRepository from './streamRepository';
import ChannelRepository from './channelRepository';

const repositories = {
    games: GameRepository,
    streams: StreamRepository,
    channels : ChannelRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
}