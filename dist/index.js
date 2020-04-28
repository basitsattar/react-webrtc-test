'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/* add css styles here (optional) */\n\n:root {\n  --highlight-color: #abcabc;\n  --color-primary: #081138;\n  --color-primary-border: #000000;\n  --boder: 30px;\n}\n\n#styles_canvasAudio__2ezh8 {\n  display: flex;\n  flex: 1;\n}\n\n.styles_marginRight__1utIa {\n  margin-right: 5rem;\n}\n.styles_error__2Hacn {\n  color: red;\n  font-weight: bold;\n}\n\n.styles_sizeAudio__37JY- {\n  width: 400px;\n  height: 400px;\n}\n\n.styles_boxCanvas__1BMl8 {\n  display: flex;\n  flex: 1;\n  background: var(--color-primary);\n  border-radius: var(--boder);\n  border: 2px solid;\n}\n\n.styles_backgroundCamera__3aDLd {\n  border-radius: var(--boder);\n  background: var(--color-primary-border);\n}\n\nbutton {\n  background-color: var(--color-primary) !important;\n  border: 0.1rem solid var(--color-primary-border) !important;\n}\n\n.styles_active__3G4VH {\n  display: block;\n}\n\n.styles_hide__1cbGo {\n  display: none;\n}\n\n.styles_app__2q9tN {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.styles_appAudio__2O2rK {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n\n.styles_topAudio__sm68M {\n  margin-top: 2.5rem;\n}\n\n.styles_app__2q9tN .styles_box__1ohgJ {\n  width: 30%;\n  height: 50%;\n}\n\n/*\n\n.app .box .controls {\n  display: flex;\n}\n\n.app .box .controls .item {\n  display: flex;\n  justify-content: space-around;\n  flex: 1;\n  align-items: center;\n} */\n";
var styles = { "canvasAudio": "styles_canvasAudio__2ezh8", "marginRight": "styles_marginRight__1utIa", "error": "styles_error__2Hacn", "sizeAudio": "styles_sizeAudio__37JY-", "boxCanvas": "styles_boxCanvas__1BMl8", "backgroundCamera": "styles_backgroundCamera__3aDLd", "active": "styles_active__3G4VH", "hide": "styles_hide__1cbGo", "app": "styles_app__2q9tN", "appAudio": "styles_appAudio__2O2rK", "topAudio": "styles_topAudio__sm68M", "box": "styles_box__1ohgJ" };
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var AudioVisualiser = function (_Component) {
  inherits(AudioVisualiser, _Component);

  function AudioVisualiser(props) {
    classCallCheck(this, AudioVisualiser);

    var _this = possibleConstructorReturn(this, (AudioVisualiser.__proto__ || Object.getPrototypeOf(AudioVisualiser)).call(this, props));

    _this.canvas = React__default.createRef();
    return _this;
  }

  createClass(AudioVisualiser, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.draw();
    }
  }, {
    key: 'draw',
    value: function draw() {
      var audioData = this.props.audioData;

      var canvas = this.canvas.current;
      var height = canvas.height;
      var width = canvas.width;
      var context = canvas.getContext('2d');
      var x = 0;
      var sliceWidth = width * 1.0 / audioData.length;

      context.lineWidth = 2;
      context.strokeStyle = '#ffffff';
      context.clearRect(0, 0, width, height);

      context.beginPath();
      context.moveTo(0, height / 2);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = audioData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          var y = item / 255.0 * height;
          context.lineTo(x, y);
          x += sliceWidth;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      context.lineTo(x, height / 2);
      context.stroke();
    }
  }, {
    key: 'render',
    value: function render() {
      return React__default.createElement('canvas', { id: '' + styles.canvasAudio, height: '300', ref: this.canvas });
    }
  }]);
  return AudioVisualiser;
}(React.Component);

var AudioAnalyser = function (_Component) {
  inherits(AudioAnalyser, _Component);

  function AudioAnalyser(props) {
    classCallCheck(this, AudioAnalyser);

    var _this = possibleConstructorReturn(this, (AudioAnalyser.__proto__ || Object.getPrototypeOf(AudioAnalyser)).call(this, props));

    _this.state = { audioData: new Uint8Array(0) };
    _this.tick = _this.tick.bind(_this);
    return _this;
  }

  createClass(AudioAnalyser, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

      this.analyser = this.audioContext.createAnalyser();
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      this.props.audio.then(function (result) {
        _this2.source = _this2.audioContext.createMediaStreamSource(result);
        _this2.source.connect(_this2.analyser);
        _this2.rafId = requestAnimationFrame(_this2.tick);
      });
    }
  }, {
    key: 'tick',
    value: function tick() {
      this.analyser.getByteTimeDomainData(this.dataArray);
      this.setState({ audioData: this.dataArray });
      this.rafId = requestAnimationFrame(this.tick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      cancelAnimationFrame(this.rafId);
      this.analyser.disconnect();
      this.source.disconnect();
    }
  }, {
    key: 'render',
    value: function render() {
      return React__default.createElement(
        'div',
        { className: 'column column-33 ' + styles.boxCanvas + ' ' },
        React__default.createElement(AudioVisualiser, {
          audioData: this.state.audioData,
          audioContext: this.audioContext
        })
      );
    }
  }]);
  return AudioAnalyser;
}(React.Component);

var Microphone = function (_Component) {
  inherits(Microphone, _Component);

  function Microphone(props) {
    classCallCheck(this, Microphone);

    var _this = possibleConstructorReturn(this, (Microphone.__proto__ || Object.getPrototypeOf(Microphone)).call(this, props));

    _this.state = {
      audio: null,
      audioSelect: null,
      listAudios: [],
      valueAudio: ''
    };
    _this.audioinput = [];
    _this.elementRef = new React__default.createRef();
    _this.enumerateDevices = new Promise(function (resolve) {
      resolve(navigator.mediaDevices.enumerateDevices());
    });

    _this.toggleMicrophone = _this.toggleMicrophone.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  createClass(Microphone, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var constraints = {
        audio: {
          deviceId: event.target.value ? { exact: event.target.value } : undefined
        },
        video: false
      };

      this.props.changeKindId(false);

      this.setState({
        audioSelect: navigator.mediaDevices.getUserMedia(constraints),
        value: event.target.value,
        audio: false
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.enumerateDevices.then(function (devices) {
        devices.map(function (device) {
          if (device.kind == 'audioinput') {
            _this2.audioinput.push({
              id: device.deviceId,
              kind: device.kind,
              label: device.label
            });
          }
        });
        _this2.setState(function (prevState) {
          return {
            listAudios: [].concat(toConsumableArray(prevState.listAudios), [_this2.audioinput])
          };
        });
      }).catch(function (err) {
        console.log(err.name + ': ' + err.message);
      });
    }
  }, {
    key: 'getMicrophone',
    value: function getMicrophone() {
      if (this.state.audioSelect) {
        this.props.changeKindId(this.state.value);
        this.setState({
          audio: this.state.audioSelect
        });
      }
    }
  }, {
    key: 'stopMicrophone',
    value: function stopMicrophone() {
      this.state.audio.then(function (audio) {
        audio.getTracks().forEach(function (track) {
          return track.stop();
        });
      });
      this.props.changeKindId(false);
      this.setState({ audio: null });
    }
  }, {
    key: 'toggleMicrophone',
    value: function toggleMicrophone() {
      if (this.state.audio) {
        this.stopMicrophone();
      } else {
        this.getMicrophone();
      }
    }
  }, {
    key: 'listMicrophones',
    value: function listMicrophones() {
      var listMicrophone = this.state.listAudios[0];
      return React__default.createElement(
        'select',
        {
          disabled: this.state.audio !== null,
          className: styles.selectAudio,
          value: this.state.value,
          onChange: this.handleChange
        },
        React__default.createElement(
          'option',
          { value: '' },
          'Selecione'
        ),
        listMicrophone.map(function (item) {
          return React__default.createElement(
            'option',
            { key: item.id, value: item.id },
            item.label
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      // const { text } = this.props;
      return React__default.createElement(
        'div',
        { className: 'column column-33 ' + styles.marginRight },
        React__default.createElement(
          React.Fragment,
          null,
          React__default.createElement(
            'div',
            { className: 'column' },
            React__default.createElement(
              'form',
              { action: 'javascript:void(0);' },
              React__default.createElement(
                'fieldset',
                null,
                React__default.createElement(
                  'label',
                  { htmlFor: 'microphone' },
                  'Selecione o seu microfone:'
                ),
                this.state.listAudios.length > 0 && this.listMicrophones(),
                React__default.createElement(
                  'button',
                  {
                    className: 'button button-outline',
                    onClick: this.toggleMicrophone,
                    type: 'button'
                  },
                  this.state.audio ? 'Parar microfone' : 'Teste seu microfone'
                )
              )
            )
          )
        ),
        this.state.audio ? React__default.createElement(AudioAnalyser, { audio: this.state.audio }) : ''
      );
    }
  }]);
  return Microphone;
}(React.Component);

var Camera = function (_Component) {
  inherits(Camera, _Component);

  function Camera(props) {
    classCallCheck(this, Camera);

    var _this = possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this, props));

    _this.state = {
      video: null,
      videoSelect: null,
      listVideos: [],
      permission: true,
      src: ''
    };
    _this.videoinput = [];
    _this.player = null;
    _this.elementRef = new React__default.createRef();
    _this.enumerateDevices = new Promise(function (resolve) {
      resolve(navigator.mediaDevices.enumerateDevices());
    });

    _this.handleChange = _this.handleChange.bind(_this);
    _this.toggleCamera = _this.toggleCamera.bind(_this);
    return _this;
  }

  createClass(Camera, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var video = navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          deviceId: event.target.value ? { exact: event.target.value } : undefined
        }
      });

      this.setState({
        videoSelect: video,
        value: event.target.value,
        video: false
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.player = this.elementRef.current;

      this.enumerateDevices.then(function (devices) {
        devices.map(function (device) {
          if (device.kind == 'videoinput') {
            _this2.videoinput.push({
              id: device.deviceId,
              kind: device.kind,
              label: device.label
            });
          }
        });
        _this2.setState(function (prevState) {
          return {
            listVideos: [].concat(toConsumableArray(prevState.listVideos), [_this2.videoinput])
          };
        });
      }).catch(function (err) {
        console.log(err.name + ': ' + err.message);
      });
    }
  }, {
    key: 'listCameras',
    value: function listCameras() {
      var listMicrophone = this.state.listVideos[0];
      return React__default.createElement(
        'select',
        {
          disabled: this.state.video !== null,
          className: styles.selectAudio,
          value: this.state.value,
          onChange: this.handleChange
        },
        React__default.createElement(
          'option',
          { value: '' },
          'Selecione'
        ),
        listMicrophone.map(function (item) {
          return React__default.createElement(
            'option',
            { key: item.id, value: item.id },
            item.label
          );
        })
      );
    }
  }, {
    key: 'stopCamera',
    value: function stopCamera() {
      this.state.videoSelect.then(function (video) {
        video.getTracks().forEach(function (track) {
          return track.stop();
        });
      });
      this.setState({ video: null });
    }
  }, {
    key: 'toggleCamera',
    value: function toggleCamera() {
      if (this.state.video) {
        this.stopCamera();
      } else {
        this.getCamera();
      }
    }
  }, {
    key: 'getCamera',
    value: function getCamera() {
      var _this3 = this;

      if (this.state.videoSelect) {
        this.state.videoSelect.then(function (stream) {
          _this3.handleUserMedia(stream);
        });
      }
    }
  }, {
    key: 'handleUserMedia',
    value: function handleUserMedia(stream) {
      this.stream = stream;
      this.setState({ video: true });
      try {
        this.player.srcObject = stream;
      } catch (error) {
        this.setState({
          src: window.URL.createObjectURL(stream)
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // const { text } = this.props;
      return React__default.createElement(
        React.Fragment,
        null,
        React__default.createElement(
          'div',
          { className: 'column column-33 ' + styles.marginRight },
          React__default.createElement(
            'div',
            { className: 'column' },
            React__default.createElement(
              'form',
              { action: 'javascript:void(0);' },
              React__default.createElement(
                'fieldset',
                null,
                React__default.createElement(
                  'label',
                  { htmlFor: 'microphone' },
                  'Selecione a c\xE2mera:'
                ),
                this.state.listVideos.length > 0 && this.listCameras(),
                React__default.createElement(
                  'button',
                  {
                    className: 'button button-outline',
                    onClick: this.toggleCamera,
                    type: 'button'
                  },
                  this.state.video ? 'Parar câmera' : 'Teste sua câmera'
                )
              )
            )
          )
        ),
        React__default.createElement(
          'div',
          { className: 'column column-33' },
          React__default.createElement('video', {
            autoPlay: true,
            width: '440',
            height: '300',
            src: this.state.src,
            muted: false,
            playsInline: true,
            ref: this.elementRef,
            className: this.state.video ? styles.active + ' ' + styles.backgroundCamera : styles.hide
          })
        )
      );
    }
  }]);
  return Camera;
}(React.Component);

var Error = function (_Component) {
  inherits(Error, _Component);

  function Error() {
    classCallCheck(this, Error);
    return possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).apply(this, arguments));
  }

  createClass(Error, [{
    key: 'render',
    value: function render() {
      return React__default.createElement(
        'div',
        { className: 'column column-33 ' + styles.marginRight },
        React__default.createElement(
          'p',
          { className: '' + styles.error },
          this.props.text
        )
      );
    }
  }]);
  return Error;
}(React.Component);

// import styles from './../styles.css';

var Audio = function (_Component) {
  inherits(Audio, _Component);

  function Audio(props) {
    classCallCheck(this, Audio);

    var _this = possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).call(this, props));

    _this.state = {
      listOutputs: [],
      output: null,
      value: '',
      src: '',
      constraints: false
    };
    _this.audioOutput = [];
    _this.elementRef = new React__default.createRef();
    _this.enumerateDevices = new Promise(function (resolve) {
      resolve(navigator.mediaDevices.enumerateDevices());
    });

    _this.handleChange = _this.handleChange.bind(_this);
    _this.toggleOutput = _this.toggleOutput.bind(_this);
    return _this;
  }

  createClass(Audio, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.playerAudio = this.elementRef.current;

      this.enumerateDevices.then(function (devices) {
        devices.map(function (device) {
          if (device.kind == 'audiooutput') {
            _this2.audioOutput.push({
              id: device.deviceId,
              kind: device.kind,
              label: device.label
            });
          }
        });

        _this2.setState(function (prevState) {
          return {
            listOutputs: [].concat(toConsumableArray(prevState.listOutputs), [_this2.audioOutput])
          };
        });

        if (_this2.props.kindId) {
          _this2.setState({ output: true });

          var constraints = {
            audio: {
              deviceId: _this2.audioOutput[0].id
            },
            video: false
          };

          _this2.setState({
            outputSelect: navigator.mediaDevices.getUserMedia(constraints)
          });
          _this2.state.outputSelect.then(function (stream) {
            _this2.handleUserMedia(stream);
          });
        }
      }).catch(function (err) {
        console.log(err.name + ': ' + err.message);
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        value: event.target.value,
        output: false
      });

      this.changeOutPut(event.target.value);
    }
  }, {
    key: 'changeOutPut',
    value: function changeOutPut(idSelected) {
      var constraints = void 0;
      if (typeof this.playerAudio.sinkId !== 'undefined' && this.state.outputSelect) {
        constraints = {
          audio: {
            deviceId: this.props.kindId
          },
          video: false
        };

        this.playerAudio.setSinkId(idSelected).then(function () {
          console.log('Success, audio output device attached: ' + idSelected);
        });
      } else {
        constraints = {
          audio: {
            deviceId: this.props.kindId
          },
          video: false
        };
      }

      this.setState({
        outputSelect: navigator.mediaDevices.getUserMedia(constraints)
      });
    }
  }, {
    key: 'listOutputs',
    value: function listOutputs() {
      var listOutputs = this.state.listOutputs[0];
      return React__default.createElement(
        'select',
        {
          required: true,
          disabled: this.state.output !== null,
          value: this.state.value,
          onChange: this.handleChange
        },
        listOutputs.map(function (item) {
          return React__default.createElement(
            'option',
            { key: item.id, value: item.id },
            item.label
          );
        })
      );
    }
  }, {
    key: 'stopOutput',
    value: function stopOutput() {
      this.state.outputSelect.then(function (output) {
        output.getTracks().forEach(function (track) {
          return track.stop();
        });
      });
      this.setState({ output: null });
    }
  }, {
    key: 'toggleOutput',
    value: function toggleOutput() {
      if (this.state.output) {
        this.stopOutput();
      } else {
        this.getOutput();
      }
    }
  }, {
    key: 'getOutput',
    value: function getOutput() {
      var _this3 = this;

      if (this.state.outputSelect) {
        this.state.outputSelect.then(function (stream) {
          _this3.handleUserMedia(stream);
        });
      }
    }
  }, {
    key: 'handleUserMedia',
    value: function handleUserMedia(stream) {
      console.log(stream);
      this.stream = stream;
      this.setState({ output: true });
      try {
        this.playerAudio.srcObject = stream;
      } catch (error) {
        this.setState({
          src: window.URL.createObjectURL(stream)
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React__default.createElement(
        React.Fragment,
        null,
        React__default.createElement(
          'div',
          { className: 'column column-33' },
          React__default.createElement(
            'div',
            { className: 'column' },
            React__default.createElement(
              'form',
              { action: 'javascript:void(0);' },
              React__default.createElement(
                'fieldset',
                null,
                React__default.createElement(
                  'label',
                  { htmlFor: 'microphone' },
                  'Verifique o seu audio:'
                ),
                this.state.listOutputs.length > 0 && this.listOutputs(),
                React__default.createElement(
                  'button',
                  {
                    className: 'button button-outline',
                    onClick: this.toggleOutput,
                    type: 'button'
                  },
                  this.state.output ? 'Parar audio' : 'Testar audio'
                )
              )
            )
          )
        ),
        React__default.createElement(
          'div',
          { className: 'column column-33' },
          React__default.createElement('audio', {
            controlsList: 'nodownload',
            preload: 'auto',
            playsInline: true,
            autoPlay: true,
            controls: true,
            src: this.state.src,
            ref: this.elementRef
          })
        )
      );
    }
  }]);
  return Audio;
}(React.Component);

var WebRtcTestComponent = function (_Component) {
  inherits(WebRtcTestComponent, _Component);

  function WebRtcTestComponent() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, WebRtcTestComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = WebRtcTestComponent.__proto__ || Object.getPrototypeOf(WebRtcTestComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      permissionMic: true,
      permissionCam: true,
      kindId: null
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(WebRtcTestComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
      }).catch(function () {
        _this2.setState({
          permissionCam: false
        });
      });
      navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
      }).catch(function () {
        _this2.setState({
          permissionMic: false
        });
      });
    }
  }, {
    key: 'changeKindId',
    value: function changeKindId(kindId) {
      this.setState({ kindId: kindId });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React__default.createElement(
        React.Fragment,
        null,
        React__default.createElement(
          'div',
          { className: 'container ' + styles.app },
          React__default.createElement(
            'div',
            { className: 'row' },
            this.state.permissionMic ? React__default.createElement(Microphone, { changeKindId: function changeKindId(kindId) {
                return _this3.changeKindId(kindId);
              } }) : React__default.createElement(Error, {
              text: 'Infelizmente não conseguimos detectar seu microfone'
            })
          ),
          React__default.createElement(
            'div',
            { className: 'row' },
            this.state.permissionCam ? React__default.createElement(Camera, null) : React__default.createElement(Error, {
              text: 'Infelizmente não conseguimos detectar sua câmera'
            })
          )
        ),
        React__default.createElement(
          'div',
          { className: 'container ' + styles.app + ' ' + styles.topAudio },
          React__default.createElement(
            'div',
            { className: 'row' },
            this.state.kindId && React__default.createElement(Audio, { kindId: this.state.kindId })
          )
        )
      );
    }
  }]);
  return WebRtcTestComponent;
}(React.Component);

module.exports = WebRtcTestComponent;
//# sourceMappingURL=index.js.map
