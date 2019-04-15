var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.test = (function() {

    /**
     * Namespace test.
     * @exports test
     * @namespace
     */
    var test = {};

    test.SearchRequest = (function() {

        /**
         * Properties of a SearchRequest.
         * @memberof test
         * @interface ISearchRequest
         * @property {string|null} [query] SearchRequest query
         * @property {number|null} [page_number] SearchRequest page_number
         * @property {number|null} [result_per_page] SearchRequest result_per_page
         * @property {test.SearchRequest.Corpus|null} [corpus] SearchRequest corpus
         */

        /**
         * Constructs a new SearchRequest.
         * @memberof test
         * @classdesc Represents a SearchRequest.
         * @implements ISearchRequest
         * @constructor
         * @param {test.ISearchRequest=} [properties] Properties to set
         */
        function SearchRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SearchRequest query.
         * @member {string} query
         * @memberof test.SearchRequest
         * @instance
         */
        SearchRequest.prototype.query = "";

        /**
         * SearchRequest page_number.
         * @member {number} page_number
         * @memberof test.SearchRequest
         * @instance
         */
        SearchRequest.prototype.page_number = 0;

        /**
         * SearchRequest result_per_page.
         * @member {number} result_per_page
         * @memberof test.SearchRequest
         * @instance
         */
        SearchRequest.prototype.result_per_page = 0;

        /**
         * SearchRequest corpus.
         * @member {test.SearchRequest.Corpus} corpus
         * @memberof test.SearchRequest
         * @instance
         */
        SearchRequest.prototype.corpus = 0;

        /**
         * Creates a new SearchRequest instance using the specified properties.
         * @function create
         * @memberof test.SearchRequest
         * @static
         * @param {test.ISearchRequest=} [properties] Properties to set
         * @returns {test.SearchRequest} SearchRequest instance
         */
        SearchRequest.create = function create(properties) {
            return new SearchRequest(properties);
        };

        /**
         * Encodes the specified SearchRequest message. Does not implicitly {@link test.SearchRequest.verify|verify} messages.
         * @function encode
         * @memberof test.SearchRequest
         * @static
         * @param {test.ISearchRequest} message SearchRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.query != null && message.hasOwnProperty("query"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.query);
            if (message.page_number != null && message.hasOwnProperty("page_number"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.page_number);
            if (message.result_per_page != null && message.hasOwnProperty("result_per_page"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.result_per_page);
            if (message.corpus != null && message.hasOwnProperty("corpus"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.corpus);
            return writer;
        };

        /**
         * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link test.SearchRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof test.SearchRequest
         * @static
         * @param {test.ISearchRequest} message SearchRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SearchRequest message from the specified reader or buffer.
         * @function decode
         * @memberof test.SearchRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {test.SearchRequest} SearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.test.SearchRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.query = reader.string();
                    break;
                case 2:
                    message.page_number = reader.int32();
                    break;
                case 3:
                    message.result_per_page = reader.int32();
                    break;
                case 4:
                    message.corpus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof test.SearchRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {test.SearchRequest} SearchRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SearchRequest message.
         * @function verify
         * @memberof test.SearchRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SearchRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.query != null && message.hasOwnProperty("query"))
                if (!$util.isString(message.query))
                    return "query: string expected";
            if (message.page_number != null && message.hasOwnProperty("page_number"))
                if (!$util.isInteger(message.page_number))
                    return "page_number: integer expected";
            if (message.result_per_page != null && message.hasOwnProperty("result_per_page"))
                if (!$util.isInteger(message.result_per_page))
                    return "result_per_page: integer expected";
            if (message.corpus != null && message.hasOwnProperty("corpus"))
                switch (message.corpus) {
                default:
                    return "corpus: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            return null;
        };

        /**
         * Corpus enum.
         * @name test.SearchRequest.Corpus
         * @enum {string}
         * @property {number} UNIVERSAL=0 UNIVERSAL value
         * @property {number} WEB=1 WEB value
         * @property {number} IMAGES=2 IMAGES value
         * @property {number} LOCAL=3 LOCAL value
         * @property {number} NEWS=4 NEWS value
         * @property {number} PRODUCTS=5 PRODUCTS value
         * @property {number} VIDEO=6 VIDEO value
         */
        SearchRequest.Corpus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNIVERSAL"] = 0;
            values[valuesById[1] = "WEB"] = 1;
            values[valuesById[2] = "IMAGES"] = 2;
            values[valuesById[3] = "LOCAL"] = 3;
            values[valuesById[4] = "NEWS"] = 4;
            values[valuesById[5] = "PRODUCTS"] = 5;
            values[valuesById[6] = "VIDEO"] = 6;
            return values;
        })();

        return SearchRequest;
    })();

    test.SearchRespond = (function() {

        /**
         * Properties of a SearchRespond.
         * @memberof test
         * @interface ISearchRespond
         * @property {string|null} [name] SearchRespond name
         * @property {number|null} [id] SearchRespond id
         * @property {number|null} [score] SearchRespond score
         */

        /**
         * Constructs a new SearchRespond.
         * @memberof test
         * @classdesc Represents a SearchRespond.
         * @implements ISearchRespond
         * @constructor
         * @param {test.ISearchRespond=} [properties] Properties to set
         */
        function SearchRespond(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SearchRespond name.
         * @member {string} name
         * @memberof test.SearchRespond
         * @instance
         */
        SearchRespond.prototype.name = "";

        /**
         * SearchRespond id.
         * @member {number} id
         * @memberof test.SearchRespond
         * @instance
         */
        SearchRespond.prototype.id = 0;

        /**
         * SearchRespond score.
         * @member {number} score
         * @memberof test.SearchRespond
         * @instance
         */
        SearchRespond.prototype.score = 0;

        /**
         * Creates a new SearchRespond instance using the specified properties.
         * @function create
         * @memberof test.SearchRespond
         * @static
         * @param {test.ISearchRespond=} [properties] Properties to set
         * @returns {test.SearchRespond} SearchRespond instance
         */
        SearchRespond.create = function create(properties) {
            return new SearchRespond(properties);
        };

        /**
         * Encodes the specified SearchRespond message. Does not implicitly {@link test.SearchRespond.verify|verify} messages.
         * @function encode
         * @memberof test.SearchRespond
         * @static
         * @param {test.ISearchRespond} message SearchRespond message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchRespond.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.score);
            return writer;
        };

        /**
         * Encodes the specified SearchRespond message, length delimited. Does not implicitly {@link test.SearchRespond.verify|verify} messages.
         * @function encodeDelimited
         * @memberof test.SearchRespond
         * @static
         * @param {test.ISearchRespond} message SearchRespond message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchRespond.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SearchRespond message from the specified reader or buffer.
         * @function decode
         * @memberof test.SearchRespond
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {test.SearchRespond} SearchRespond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchRespond.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.test.SearchRespond();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.id = reader.int32();
                    break;
                case 3:
                    message.score = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SearchRespond message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof test.SearchRespond
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {test.SearchRespond} SearchRespond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchRespond.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SearchRespond message.
         * @function verify
         * @memberof test.SearchRespond
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SearchRespond.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            return null;
        };

        return SearchRespond;
    })();

    return test;
})();