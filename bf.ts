import { BlockFrostAPI } from '@blockfrost/blockfrost-js';

const API = new BlockFrostAPI({
    projectId: 'mainnetNjd8GnHzFnwVpznqPiO2hAJjfFEgezC0', // see: https://blockfrost.io
});
try {
    const latestBlock = await API.blocksLatest();
    const networkInfo = await API.network();
    const latestEpoch = await API.epochsLatest();
    const health = await API.health();
    const address = await API.addresses(
        'addr1q9k9zgyf9pmnfcn5t90y365q62xqtaa4defm53dnxzvl27dk6m3x8sq632asj0g7chdwcaqw6asr4l6pqesl3v8xjneq3qfezd',
    );
    const pools = await API.pools({ page: 1, count: 10, order: 'asc' });

    console.log('pools', pools);
    console.log('address', address);
    console.log('networkInfo', networkInfo);
    console.log('latestEpoch', latestEpoch);
    console.log('latestBlock', latestBlock);
    console.log('health', health);
} catch (err) {
    console.log('error', err);
}