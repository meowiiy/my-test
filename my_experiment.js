/********************** 
 * My_Experiment *
 **********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'my_experiment';  // from the Builder filename that created this script
let expInfo = {
    'participant': '001',
    'session': '001',
    'group': ["gesture", "button"],
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(break_2RoutineBegin());
flowScheduler.add(break_2RoutineEachFrame());
flowScheduler.add(break_2RoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);


flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'эксперимент тид/phase1.xlsx', 'path': 'эксперимент тид/phase1.xlsx'},
    {'name': 'эксперимент тид/phase2.xlsx', 'path': 'эксперимент тид/phase2.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructionClock;
var text_3;
var key_resp_3;
var trialClock;
var text;
var key_resp;
var break_2Clock;
var text_2;
var key_resp_2;
var endClock;
var text_4;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Здравствуйте! Сейчас на экране будут появляться цветные слова. Ваша задача — как можно быстрее нажимать стрелки (или двигать рукой) в соответствии с правилом.\n\nПервая часть: КРАСНЫЙ и ФИОЛЕТОВЫЙ — влево. СИНИЙ и ОРАНЖЕВЫЙ — вправо.\n\nВо второй части правило изменится, вы увидите его на экране. Старайтесь отвечать точно.\nНажмите ПРОБЕЛ, чтобы начать.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "break_2"
  break_2Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Первая часть завершена.\n\nВнимание! Правило меняется:\nКРАСНЫЙ и ФИОЛЕТОВЫЙ — вверх.\nСИНИЙ и ОРАНЖЕВЫЙ — вниз.\n\nНажмите ПРОБЕЛ, чтобы продолжить.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Спасибо за участие! Эксперимент завершен.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instructionMaxDurationReached;
var _key_resp_3_allKeys;
var instructionMaxDuration;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructionClock.reset();
    routineTimer.reset();
    instructionMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('instruction.started', globalClock.getTime());
    instructionMaxDuration = null
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(text_3);
    instructionComponents.push(key_resp_3);
    
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction' ---
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // if text_3 is active this frame...
    if (text_3.status === PsychoJS.Status.STARTED) {
    }
    
    if (text_3.status === PsychoJS.Status.STARTED && Boolean(key_resp_3.keys)) {
      // keep track of stop time/frame for later
      text_3.tStop = t;  // not accounting for scr refresh
      text_3.frameNStop = frameN;  // exact frame index
      // update status
      text_3.status = PsychoJS.Status.FINISHED;
      text_3.setAutoDraw(false);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    if (key_resp_3.status === PsychoJS.Status.STARTED && Boolean(key_resp_3.keys)) {
      // keep track of stop time/frame for later
      key_resp_3.tStop = t;  // not accounting for scr refresh
      key_resp_3.frameNStop = frameN;  // exact frame index
      // update status
      key_resp_3.status = PsychoJS.Status.FINISHED;
      if (key_resp_3.status === PsychoJS.Status.STARTED && Boolean(key_resp_3.keys)) {
        // keep track of stop time/frame for later
        key_resp_3.tStop = t;  // not accounting for scr refresh
        key_resp_3.frameNStop = frameN;  // exact frame index
        // update status
        key_resp_3.status = PsychoJS.Status.FINISHED;
        key_resp_3.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if key_resp_3 is active this frame...
      if (key_resp_3.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_3.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
        if (_key_resp_3_allKeys.length > 0) {
          key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
          key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
          key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of instructionComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function instructionRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'instruction' ---
      for (const thisComponent of instructionComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('instruction.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_3.corr, level);
      }
      psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
      if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
          psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
          routineTimer.reset();
          }
      
      key_resp_3.stop();
      // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
    return async function() {
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      
      // set up handler to look after randomisation of conditions etc
      trials = new TrialHandler({
        psychoJS: psychoJS,
        nReps: 1, method: TrialHandler.Method.RANDOM,
        extraInfo: expInfo, originPath: undefined,
        trialList: 'эксперимент тид/phase1.xlsx',
        seed: undefined, name: 'trials'
      });
      psychoJS.experiment.addLoop(trials); // add the loop to the experiment
      currentLoop = trials;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      for (const thisTrial of trials) {
        snapshot = trials.getSnapshot();
        trialsLoopScheduler.add(importConditions(snapshot));
        trialsLoopScheduler.add(trialRoutineBegin(snapshot));
        trialsLoopScheduler.add(trialRoutineEachFrame());
        trialsLoopScheduler.add(trialRoutineEnd(snapshot));
        trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
      }
      
      return Scheduler.Event.NEXT;
    }
  }
  
  
async function trialsLoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(trials);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    return Scheduler.Event.NEXT;
  }
  
  
function trialsLoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
      return Scheduler.Event.NEXT;
      }
    };
  }
  
  
var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
    return async function() {
      TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
      
      // set up handler to look after randomisation of conditions etc
      trials_2 = new TrialHandler({
        psychoJS: psychoJS,
        nReps: 1, method: TrialHandler.Method.RANDOM,
        extraInfo: expInfo, originPath: undefined,
        trialList: 'эксперимент тид/phase2.xlsx',
        seed: undefined, name: 'trials_2'
      });
      psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
      currentLoop = trials_2;  // we're now the current loop
      
      // Schedule all the trials in the trialList:
      for (const thisTrial_2 of trials_2) {
        snapshot = trials_2.getSnapshot();
        trials_2LoopScheduler.add(importConditions(snapshot));
        trials_2LoopScheduler.add(trialRoutineBegin(snapshot));
        trials_2LoopScheduler.add(trialRoutineEachFrame());
        trials_2LoopScheduler.add(trialRoutineEnd(snapshot));
        trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
      }
      
      return Scheduler.Event.NEXT;
    }
  }
  
  
async function trials_2LoopEnd() {
    // terminate loop
    psychoJS.experiment.removeLoop(trials_2);
    // update the current loop from the ExperimentHandler
    if (psychoJS.experiment._unfinishedLoops.length>0)
      currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
    else
      currentLoop = psychoJS.experiment;  // so we use addData from the experiment
    return Scheduler.Event.NEXT;
  }
  
  
function trials_2LoopEndIteration(scheduler, snapshot) {
    // ------Prepare for next entry------
    return async function () {
      if (typeof snapshot !== 'undefined') {
        // ------Check if user ended loop early------
        if (snapshot.finished) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          scheduler.stop();
        } else {
          psychoJS.experiment.nextEntry(snapshot);
        }
      return Scheduler.Event.NEXT;
      }
    };
  }
  
  
var trialMaxDurationReached;
var _key_resp_allKeys;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'trial' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      trialClock.reset();
      routineTimer.reset();
      trialMaxDurationReached = false;
      // update component parameters for each repeat
      text.setColor(new util.Color(color));
      text.setText(color);
      key_resp.keys = undefined;
      key_resp.rt = undefined;
      _key_resp_allKeys = [];
      psychoJS.experiment.addData('trial.started', globalClock.getTime());
      trialMaxDuration = null
      // keep track of which components have finished
      trialComponents = [];
      trialComponents.push(text);
      trialComponents.push(key_resp);
      
      for (const thisComponent of trialComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function trialRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'trial' ---
      // get current time
      t = trialClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text* updates
      if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text.tStart = t;  // (not accounting for frame time here)
        text.frameNStart = frameN;  // exact frame index
        
        text.setAutoDraw(true);
      }
      
      
      // if text is active this frame...
      if (text.status === PsychoJS.Status.STARTED) {
      }
      
      if (text.status === PsychoJS.Status.STARTED && Boolean(key_resp.keys)) {
        // keep track of stop time/frame for later
        text.tStop = t;  // not accounting for scr refresh
        text.frameNStop = frameN;  // exact frame index
        // update status
        text.status = PsychoJS.Status.FINISHED;
        text.setAutoDraw(false);
      }
      
      
      // *key_resp* updates
      if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp.tStart = t;  // (not accounting for frame time here)
        key_resp.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
      }
      
      // if key_resp is active this frame...
      if (key_resp.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp.getKeys({
          keyList: typeof ['down','left','right','up'] === 'string' ? [['down','left','right','up']] : ['down','left','right','up'], 
          waitRelease: false
        });
        _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
        if (_key_resp_allKeys.length > 0) {
          key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
          key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
          key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
          // was this correct?
          if (key_resp.keys == correctAns) {
              key_resp.corr = 1;
          } else {
              key_resp.corr = 0;
          }
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of trialComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function trialRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'trial' ---
      for (const thisComponent of trialComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
      // was no response the correct answer?!
      if (key_resp.keys === undefined) {
        if (['None','none',undefined].includes(correctAns)) {
           key_resp.corr = 1;  // correct non-response
        } else {
           key_resp.corr = 0;  // failed to respond (incorrectly)
        }
      }
      // store data for current loop
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp.corr, level);
      }
      psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
      psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
      if (typeof key_resp.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
          psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
          routineTimer.reset();
          }
      
      key_resp.stop();
      // the Routine "trial" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var break_2MaxDurationReached;
var _key_resp_2_allKeys;
var break_2MaxDuration;
var break_2Components;
function break_2RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'break_2' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      break_2Clock.reset();
      routineTimer.reset();
      break_2MaxDurationReached = false;
      // update component parameters for each repeat
      key_resp_2.keys = undefined;
      key_resp_2.rt = undefined;
      _key_resp_2_allKeys = [];
      psychoJS.experiment.addData('break_2.started', globalClock.getTime());
      break_2MaxDuration = null
      // keep track of which components have finished
      break_2Components = [];
      break_2Components.push(text_2);
      break_2Components.push(key_resp_2);
      
      for (const thisComponent of break_2Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function break_2RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'break_2' ---
      // get current time
      t = break_2Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_2* updates
      if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_2.tStart = t;  // (not accounting for frame time here)
        text_2.frameNStart = frameN;  // exact frame index
        
        text_2.setAutoDraw(true);
      }
      
      
      // if text_2 is active this frame...
      if (text_2.status === PsychoJS.Status.STARTED) {
      }
      
      if (text_2.status === PsychoJS.Status.STARTED && Boolean(key_resp_2.keys)) {
        // keep track of stop time/frame for later
        text_2.tStop = t;  // not accounting for scr refresh
        text_2.frameNStop = frameN;  // exact frame index
        // update status
        text_2.status = PsychoJS.Status.FINISHED;
        text_2.setAutoDraw(false);
      }
      
      
      // *key_resp_2* updates
      if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_2.tStart = t;  // (not accounting for frame time here)
        key_resp_2.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
      }
      if (key_resp_2.status === PsychoJS.Status.STARTED && Boolean(key_resp_2.keys)) {
        // keep track of stop time/frame for later
        key_resp_2.tStop = t;  // not accounting for scr refresh
        key_resp_2.frameNStop = frameN;  // exact frame index
        // update status
        key_resp_2.status = PsychoJS.Status.FINISHED;
        if (key_resp_2.status === PsychoJS.Status.STARTED && Boolean(key_resp_2.keys)) {
          // keep track of stop time/frame for later
          key_resp_2.tStop = t;  // not accounting for scr refresh
          key_resp_2.frameNStop = frameN;  // exact frame index
          // update status
          key_resp_2.status = PsychoJS.Status.FINISHED;
          key_resp_2.status = PsychoJS.Status.FINISHED;
            }
          
        }
        
        // if key_resp_2 is active this frame...
        if (key_resp_2.status === PsychoJS.Status.STARTED) {
          let theseKeys = key_resp_2.getKeys({
            keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
            waitRelease: false
          });
          _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
          if (_key_resp_2_allKeys.length > 0) {
            key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
            key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
            key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of break_2Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function break_2RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'break_2' ---
        for (const thisComponent of break_2Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('break_2.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(key_resp_2.corr, level);
        }
        psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
        if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
            psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
            routineTimer.reset();
            }
        
        key_resp_2.stop();
        // the Routine "break_2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'end' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        endClock.reset(routineTimer.getTime());
        routineTimer.add(3.000000);
        endMaxDurationReached = false;
        // update component parameters for each repeat
        psychoJS.experiment.addData('end.started', globalClock.getTime());
        endMaxDuration = null
        // keep track of which components have finished
        endComponents = [];
        endComponents.push(text_4);
        
        for (const thisComponent of endComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
var frameRemains;
function endRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'end' ---
        // get current time
        t = endClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_4* updates
        if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_4.tStart = t;  // (not accounting for frame time here)
          text_4.frameNStart = frameN;  // exact frame index
          
          text_4.setAutoDraw(true);
        }
        
        
        // if text_4 is active this frame...
        if (text_4.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_4.tStop = t;  // not accounting for scr refresh
          text_4.frameNStop = frameN;  // exact frame index
          // update status
          text_4.status = PsychoJS.Status.FINISHED;
          text_4.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of endComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function endRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'end' ---
        for (const thisComponent of endComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('end.stopped', globalClock.getTime());
        if (routineForceEnded) {
            routineTimer.reset();} else if (endMaxDurationReached) {
            endClock.add(endMaxDuration);
        } else {
            endClock.add(3.000000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
function importConditions(currentLoop) {
      return async function () {
        psychoJS.importAttributes(currentLoop.getCurrentTrial());
        return Scheduler.Event.NEXT;
        };
    }
    
    
async function quitPsychoJS(message, isCompleted) {
      // Check for and save orphaned data
      if (psychoJS.experiment.isEntryEmpty()) {
        psychoJS.experiment.nextEntry();
      }
      psychoJS.window.close();
      psychoJS.quit({message: message, isCompleted: isCompleted});
      
      return Scheduler.Event.QUIT;
    }
