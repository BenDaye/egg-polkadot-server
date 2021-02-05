'use strict';

const Keyring = require('@polkadot/keyring').Keyring;
const {
  mnemonicGenerate,
  mnemonicToMiniSecret,
  mnemonicValidate,
  randomAsHex,
} = require('@polkadot/util-crypto');
const {
  formatBalance,
  formatNumber,
  u8aToHex,
  hexToU8a,
} = require('@polkadot/util');

let keyring;

module.exports = {
  async initKeyring() {
    if (keyring) {
      return keyring;
    }
    const properties = await this.ctx.app.polkadot.rpc.system.properties();
    const ss58Format = properties.ss58Format.toHuman();
    // !!!: export declare type KeypairType = 'ed25519' | 'sr25519' | 'ecdsa' | 'ethereum';
    const type = 'sr25519';
    keyring = new Keyring({ ss58Format, type });
    return keyring;
  },
  mnemonicGenerate() {
    return mnemonicGenerate();
  },
  mnemonicToMiniSecret(mnemonic) {
    if (!mnemonicValidate(mnemonic)) {
      throw new TypeError('must be mnemonic string');
    }
    return u8aToHex(mnemonicToMiniSecret(mnemonic));
  },
  seedGenerate(length = 32) {
    return randomAsHex(length);
  },
  async addFromMnemonic({ mnemonic, meta = {}, keypairType = 'sr25519' }) {
    if (!mnemonicValidate(mnemonic)) {
      throw new TypeError('must be mnemonic string');
    }
    const keyring = await this.initKeyring();
    return keyring.addFromMnemonic(mnemonic, meta, keypairType);
  },
  async addFromSeed({ seed, meta = {}, keypairType = 'sr25519' }) {
    const keyring = await this.initKeyring();
    seed = hexToU8a(seed);
    return keyring.addFromSeed(seed, meta, keypairType);
  },
  async addFromUri({ uri, meta = {}, keypairType = 'sr25519' }) {
    const keyring = await this.initKeyring();
    return keyring.addFromUri(uri, meta, keypairType);
  },
  async addFromJson({ json, ignoreChecksum = false }) {
    const keyring = await this.initKeyring();
    return keyring.addFromJson(json, ignoreChecksum);
  },
  async createFromUri({ uri, meta = {}, keypairType = 'sr25519' }) {
    const keyring = await this.initKeyring();
    return keyring.createFromUri(uri, meta, keypairType);
  },
  async formatBalance(value, opts, de) {
    const properties = await this.ctx.app.polkadot.rpc.system.properties();
    const decimals = properties.get('tokenDecimals').toJSON();
    const unit = properties.get('tokenSymbol').toJSON();
    formatBalance.setDefaults({ decimals, unit });
    return formatBalance(value, opts, de);
  },
  formatNumber(value) {
    return formatNumber(value);
  },
};
