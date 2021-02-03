'use strict';

const mnemonicGenerate = require('@polkadot/util-crypto').mnemonicGenerate;
const randomAsHex = require('@polkadot/util-crypto').randomAsHex;
const Keyring = require('@polkadot/keyring').Keyring;
const formatBalance = require('@polkadot/util').formatBalance;
const formatNumber = require('@polkadot/util').formatNumber;

module.exports = {
  async keyring() {
    const properties = await this.ctx.app.polkadot.rpc.system.properties();
    const ss58Format = properties.ss58Format.toHuman();
    // !!!: export declare type KeypairType = 'ed25519' | 'sr25519' | 'ecdsa' | 'ethereum';
    const type = 'sr25519';
    return new Keyring({ ss58Format, type });
  },
  mnemonicGenerate() {
    return mnemonicGenerate();
  },
  seedGenerate(length = 32) {
    return randomAsHex(length);
  },
  async createFromMnemonic({ mnemonic, derivationPath = '', meta = {}, keypairType = 'sr25519' }) {
    const keyring = await this.keyring();
    return keyring.createFromUri(`${mnemonic}${derivationPath}`, meta, keypairType).toJson();
  },
  async addFromMnemonic({ mnemonic, meta = {}, keypairType = 'sr25519' }) {
    const keyring = await this.keyring();
    return keyring.addFromMnemonic(mnemonic, meta, keypairType);
  },
  async addFromUri({ uri }) {
    const keyring = await this.keyring();
    return keyring.addFromUri(uri);
  },
  async keypairAlice() {
    const keyring = await this.keyring();
    return keyring.addFromUri('//Alice', { name: 'Alice Default' });
  },
  async formatBalance(value) {
    const properties = await this.ctx.app.polkadot.rpc.system.properties();
    const decimals = properties.get('tokenDecimals').toJSON();
    const unit = properties.get('tokenSymbol').toJSON();
    formatBalance.setDefaults({ decimals, unit });
    return formatBalance(value);
  },
  formatNumber(value) {
    return formatNumber(value);
  },
};
