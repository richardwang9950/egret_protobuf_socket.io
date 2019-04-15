type Long = protobuf.Long;

/** Namespace test. */
declare namespace test {

    /** Properties of a SearchRequest. */
    interface ISearchRequest {

        /** SearchRequest query */
        query?: (string|null);

        /** SearchRequest page_number */
        page_number?: (number|null);

        /** SearchRequest result_per_page */
        result_per_page?: (number|null);

        /** SearchRequest corpus */
        corpus?: (test.SearchRequest.Corpus|null);
    }

    /** Represents a SearchRequest. */
    class SearchRequest implements ISearchRequest {

        /**
         * Constructs a new SearchRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: test.ISearchRequest);

        /** SearchRequest query. */
        public query: string;

        /** SearchRequest page_number. */
        public page_number: number;

        /** SearchRequest result_per_page. */
        public result_per_page: number;

        /** SearchRequest corpus. */
        public corpus: test.SearchRequest.Corpus;

        /**
         * Creates a new SearchRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchRequest instance
         */
        public static create(properties?: test.ISearchRequest): test.SearchRequest;

        /**
         * Encodes the specified SearchRequest message. Does not implicitly {@link test.SearchRequest.verify|verify} messages.
         * @param message SearchRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: test.ISearchRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link test.SearchRequest.verify|verify} messages.
         * @param message SearchRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: test.ISearchRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SearchRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): test.SearchRequest;

        /**
         * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): test.SearchRequest;

        /**
         * Verifies a SearchRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    namespace SearchRequest {

        /** Corpus enum. */
        enum Corpus {
            UNIVERSAL = 0,
            WEB = 1,
            IMAGES = 2,
            LOCAL = 3,
            NEWS = 4,
            PRODUCTS = 5,
            VIDEO = 6
        }
    }

    /** Properties of a SearchRespond. */
    interface ISearchRespond {

        /** SearchRespond name */
        name?: (string|null);

        /** SearchRespond id */
        id?: (number|null);

        /** SearchRespond score */
        score?: (number|null);
    }

    /** Represents a SearchRespond. */
    class SearchRespond implements ISearchRespond {

        /**
         * Constructs a new SearchRespond.
         * @param [properties] Properties to set
         */
        constructor(properties?: test.ISearchRespond);

        /** SearchRespond name. */
        public name: string;

        /** SearchRespond id. */
        public id: number;

        /** SearchRespond score. */
        public score: number;

        /**
         * Creates a new SearchRespond instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchRespond instance
         */
        public static create(properties?: test.ISearchRespond): test.SearchRespond;

        /**
         * Encodes the specified SearchRespond message. Does not implicitly {@link test.SearchRespond.verify|verify} messages.
         * @param message SearchRespond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: test.ISearchRespond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SearchRespond message, length delimited. Does not implicitly {@link test.SearchRespond.verify|verify} messages.
         * @param message SearchRespond message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: test.ISearchRespond, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SearchRespond message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchRespond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): test.SearchRespond;

        /**
         * Decodes a SearchRespond message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchRespond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): test.SearchRespond;

        /**
         * Verifies a SearchRespond message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}
