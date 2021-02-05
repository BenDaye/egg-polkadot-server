'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.resources('admin_account', '/api/v1/admin/account', controller.v1.admin.account);

  const version = 'v1';
  const apiPrefix = `/api/${version}`;

  const adminAccountRouter = app.router.namespace(`${apiPrefix}/admin/account`);
  adminAccountRouter.resources('admin_account', '/', controller.v1.admin.account);

  const adminBalancesRouter = app.router.namespace(`${apiPrefix}/admin/balances`);
  adminBalancesRouter.post('admin_balances_transfer', '/transfer', controller.v1.admin.balances.transfer);
  adminBalancesRouter.post('admin_balances_transferKeepAlive', '/transfer_keep_alive', controller.v1.admin.balances.transferKeepAlive);
  adminBalancesRouter.get('admin_balances_queryAll', '/:address', controller.v1.admin.balances.queryAll);

  const deriveBalancesRouter = app.router.namespace(`${apiPrefix}/derive/balances`);
  deriveBalancesRouter.get('derive_balances_all', '/all/:address', controller.v1.derive.balances.all);
  deriveBalancesRouter.get('derive_balances_votingBalances', '/voting_balances', controller.v1.derive.balances.votingBalances);

  const deriveAccountsRouter = app.router.namespace(`${apiPrefix}/derive/accounts`);
  deriveAccountsRouter.get('derive_accounts_indexes', '/indexes', controller.v1.derive.accounts.indexes);
  deriveAccountsRouter.get('derive_accounts_info', '/info/:address', controller.v1.derive.accounts.info);

  const queryBalancesRouter = app.router.namespace(`${apiPrefix}/query/balances`);
  queryBalancesRouter.get('query_balances_account', '/account/:account', controller.v1.query.balances.account);
  queryBalancesRouter.get('query_balances_locks', '/locks/:account', controller.v1.query.balances.locks);
  queryBalancesRouter.get('query_balances_storageVersion', '/storage_version', controller.v1.query.balances.storageVersion);
  queryBalancesRouter.get('query_balances_totalIssuance', '/total_issuance', controller.v1.query.balances.totalIssuance);

  const rpcAuthorRouter = app.router.namespace(`${apiPrefix}/rpc/author`);
  rpcAuthorRouter.get('rpc_author_hasKey', '/has_key', controller.v1.rpc.author.hasKey);

  const rpcChainRouter = app.router.namespace(`${apiPrefix}/rpc/chain`);
  rpcChainRouter.get('rpc_chain_block', '/block/:hash', controller.v1.rpc.chain.getBlock);
  rpcChainRouter.get('rpc_chain_blockHash', '/block_hash/:blockNumber', controller.v1.rpc.chain.getBlockHash);
  rpcChainRouter.get('rpc_chain_finalizedHead', '/finalized_head', controller.v1.rpc.chain.getFinalizedHead);
  rpcChainRouter.get('rpc_chain_header', '/header/:hash', controller.v1.rpc.chain.getHeader);

  const rpcRpcRouter = app.router.namespace(`${apiPrefix}/rpc/rpc`);
  rpcRpcRouter.get('rpc_rpc_methods', '/methods', controller.v1.rpc.rpc.methods);

  const rpcSystemRouter = app.router.namespace(`${apiPrefix}/rpc/system`);
  rpcSystemRouter.get('rpc_system_chain', '/chain', controller.v1.rpc.system.chain);
  rpcSystemRouter.get('rpc_system_chainType', '/chain_type', controller.v1.rpc.system.chainType);
  rpcSystemRouter.get('rpc_system_health', '/health', controller.v1.rpc.system.health);
  rpcSystemRouter.get('rpc_system_name', '/name', controller.v1.rpc.system.name);
  rpcSystemRouter.get('rpc_system_networkState', '/network_state', controller.v1.rpc.system.networkState);
  rpcSystemRouter.get('rpc_system_nodeRoles', '/node_roles', controller.v1.rpc.system.nodeRoles);
  rpcSystemRouter.get('rpc_system_peers', '/peers', controller.v1.rpc.system.peers);
  rpcSystemRouter.get('rpc_system_properties', '/properties', controller.v1.rpc.system.properties);
  rpcSystemRouter.get('rpc_system_syncState', '/sync_state', controller.v1.rpc.system.syncState);
  rpcSystemRouter.get('rpc_system_version', '/version', controller.v1.rpc.system.version);

  const rpcStateRouter = app.router.namespace(`${apiPrefix}/rpc/state`);
  rpcStateRouter.get('rpc_state_getMetadata', '/metadata', controller.v1.rpc.state.getMetadata);
};
