'use strict';

const Service = require('egg').Service;

class AssetsService extends Service {
  async burn(id, who, amount) {
    const burn = await this.app.polkadot.tx.assets.burn(id, who, amount);
    return burn.toHuman();
  }
  async create(id, admin, maxZombies, minBalance) {
    const create = await this.app.polkadot.tx.assets.create(id, admin, maxZombies, minBalance);
    return create.toHuman();
  }
  async destroy(id, zombiesWitness) {
    const destroy = await this.app.polkadot.tx.assets.destroy(id, zombiesWitness);
    return destroy.toHuman();
  }
  async forceCreate(id, owner, maxZombies, minBalance) {
    const forceCreate = await this.app.polkadot.tx.assets.forceCreate(id, owner, maxZombies, minBalance);
    return forceCreate.toHuman();
  }
  async forceDestroy(id, zombiesWitness) {
    const forceDestroy = await this.app.polkadot.tx.assets.forceDestroy(id, zombiesWitness);
    return forceDestroy.toHuman();
  }
  async forceTransfer(id, source, dest, amount) {
    const forceTransfer = await this.app.polkadot.tx.assets.forceTransfer(id, source, dest, amount);
    return forceTransfer.toHuman();
  }
  async freeze(id, who) {
    const freeze = await this.app.polkadot.tx.assets.freeze(id, who);
    return freeze.toHuman();
  }
  async freezeAsset(id) {
    const freezeAsset = await this.app.polkadot.tx.assets.freezeAsset(id);
    return freezeAsset.toHuman();
  }
  async mint(id, beneficiary, amount) {
    const mint = await this.app.polkadot.tx.assets.mint(id, beneficiary, amount);
    return mint.toHuman();
  }
  async setMaxZombies(id, maxZombies) {
    const setMaxZombies = await this.app.polkadot.tx.assets.setMaxZombies(id, maxZombies);
    return setMaxZombies.toHuman();
  }
  async setMetadata(id, name, symbol, decimals) {
    const setMetadata = await this.app.polkadot.tx.assets.setMetadata(id, name, symbol, decimals);
    return setMetadata.toHuman();
  }
  async setTeam(id, issuer, admin, freezer) {
    const setTeam = await this.app.polkadot.tx.assets.setTeam(id, issuer, admin, freezer);
    return setTeam.toHuman();
  }
  async thaw(id, who) {
    const thaw = await this.app.polkadot.tx.assets.thaw(id, who);
    return thaw.toHuman();
  }
  async thawAsset(id) {
    const thawAsset = await this.app.polkadot.tx.assets.thawAsset(id);
    return thawAsset.toHuman();
  }
  async transfer(id, target, amount) {
    const transfer = await this.app.polkadot.tx.assets.transfer(id, target, amount);
    return transfer.toHuman();
  }
  async transferOwnership(id, owner) {
    const transferOwnership = await this.app.polkadot.tx.assets.transferOwnership(id, owner);
    return transferOwnership.toHuman();
  }
}

module.exports = AssetsService;
