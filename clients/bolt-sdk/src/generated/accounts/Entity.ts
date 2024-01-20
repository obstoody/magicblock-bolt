/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
import * as web3 from "@solana/web3.js";
import * as beetSolana from "@metaplex-foundation/beet-solana";

/**
 * Arguments used to create {@link Entity}
 * @category Accounts
 * @category generated
 */
export interface EntityArgs {
  id: beet.bignum;
}

export const entityDiscriminator = [46, 157, 161, 161, 254, 46, 79, 24];
/**
 * Holds the data for the {@link Entity} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class Entity implements EntityArgs {
  private constructor(readonly id: beet.bignum) {}

  /**
   * Creates a {@link Entity} instance from the provided args.
   */
  static fromArgs(args: EntityArgs) {
    return new Entity(args.id);
  }

  /**
   * Deserializes the {@link Entity} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [Entity, number] {
    return Entity.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link Entity} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<Entity> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    );
    if (accountInfo == null) {
      throw new Error(`Unable to find Entity account at ${address}`);
    }
    return Entity.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      "WorLD15A7CrDwLcLy4fRqtaTb9fbd8o8iqiEMUDse2n"
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, entityBeet);
  }

  /**
   * Deserializes the {@link Entity} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [Entity, number] {
    return entityBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link Entity} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return entityBeet.serialize({
      accountDiscriminator: entityDiscriminator,
      ...this,
    });
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link Entity}
   */
  static get byteSize() {
    return entityBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link Entity} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      Entity.byteSize,
      commitment
    );
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link Entity} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === Entity.byteSize;
  }

  /**
   * Returns a readable version of {@link Entity} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      id: (() => {
        const x = this.id as { toNumber: () => number };
        if (typeof x.toNumber === "function") {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const entityBeet = new beet.BeetStruct<
  Entity,
  EntityArgs & {
    accountDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ["accountDiscriminator", beet.uniformFixedSizeArray(beet.u8, 8)],
    ["id", beet.u64],
  ],
  Entity.fromArgs,
  "Entity"
);