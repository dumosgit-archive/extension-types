// Dumorando's Turbowarp Extension API type declerations.
//not the best, so uhh yeah

declare global {
    /**
     * Block argument types
     * @enum {string}
     */
    enum ArgumentType {
      /**
       * Numeric value with angle picker
       */
      ANGLE,
      /**
       * Boolean value with hexagonal placeholder
       */
      BOOLEAN,
      /**
       * Numeric value with color picker
       */
      COLOR,
      /**
       * Numeric value with text field
       */
      NUMBER,
      /**
       * String value with text field
       */
      STRING,
      /**
       * String value with matrix field
       */
      MATRIX,
      /**
       * MIDI note number with note picker (piano) field
       */
      NOTE,
      /**
       * Inline image on block (as part of the label)
       */
      IMAGE,
      /**
       * Name of costume in the current target
       */
      COSTUME,
      /**
       * Name of sound in the current target
       */
      SOUND
    }
  
    enum BlockType {
      /**
       * Boolean reporter with hexagonal shape
       */
      BOOLEAN,
      /**
       * A button (not an actual block) for some special action, like making a variable
       */
      BUTTON,
      /**
       * A text label (not an actual block) for adding comments or labeling blocks
       */
      LABEL,
      /**
       * Command block
       */
      COMMAND,
      /**
       * Specialized command block which may or may not run a child branch
       * The thread continues with the next block whether or not a child branch ran.
       */
      CONDITIONAL,
      /**
       * Specialized hat block with no implementation function
       * This stack only runs if the corresponding event is emitted by other code.
       */
      EVENT,
      /**
       * Hat block which conditionally starts a block stack
       */
      HAT,
      /**
       * Specialized command block which may or may not run a child branch
       * If a child branch runs, the thread evaluates the look block again.
       */
      LOOP,
      /**
       * General reporter with numeric or string value
       */
      REPORTER,
      /**
       * Arbitrary scratch-blocks XML.
       */
      XML
    }
  
    enum TargetType {
      SPRITE,
      STAGE
    }
  
    interface ScratchExtensions {
      ArgumentType: typeof ArgumentType,
      BlockType: typeof BlockType,
      TargetType: typeof TargetType,
      canEmbed: Promise<Boolean>,
      canFetch: Promise<Boolean>,
      canGeolocate: Promise<Boolean>,
      canNotify: Promise<Boolean>,
      canOpenWindow: Promise<Boolean>,
      canReadClipboard: Promise<Boolean>,
      canRecordAudio: Promise<Boolean>,
      canRecordVideo: Promise<Boolean>,
      canRedirect: Promise<Boolean>,
      extensions: {
        unsandboxed: Boolean,
        register(extension: any): void
      }
      fetch(url, options): Promise<Response>,
      gui: {
        getBlockly(): Promise<any>,
        getBlocklyEagerly(): Promise<any>
      },
      openWindow(url, features): Promise<null>,
      redirect(url): Promise<null>,
      renderer: Object,
      vm: Object
    }
  
    var Scratch: ScratchExtensions;
  }
  
  export {};
  