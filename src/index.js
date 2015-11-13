/**
 * IMPORT GLOBAL STYLING
 */

// import normalize
import 'src/core/normalize'

// import utilities
import 'src/core/utilities'

// import grid
import 'src/core/grid'

/**
 * IMPORT EACH COMPONENT
 */
import alert from 'src/components/alert'
import breadcrumb from 'src/components/breadcrumb'
import buttons from 'src/components/buttons'
import buttonGroup from 'src/components/button-group'
import buttonCheckbox from 'src/components/button-checkbox'
import buttonRadio from 'src/components/button-radio'
import card from 'src/components/card'
import {carousel, slide} from 'src/components/carousel'
import {collapse, collapseToggle} from 'src/components/collapse'
import dropdown from 'src/components/dropdown'
import dropdownSelect from 'src/components/dropdown-select'
import formCheckbox from 'src/components/form-checkbox'
import formInput from 'src/components/form-input'
import formRadio from 'src/components/form-radio'
import formSelect from 'src/components/form-select'
import formTextarea from 'src/components/form-textarea'
import icons from 'src/components/icons'
import images from 'src/components/images'
import jumbotron from 'src/components/jumbotron'
import labels from 'src/components/labels'
import listGroup from 'src/components/list-group'
import media from 'src/components/media'
import modal from 'src/components/modal'
import nav from 'src/components/nav'
import navbar from 'src/components/navbar'
import pager from 'src/components/pager'
import pagination from 'src/components/pagination'
import popover from 'src/components/popover'
import progress from 'src/components/progress'
import tables from 'src/components/tables'
import tabs from 'src/components/tabs'
import tooltip from 'src/components/tooltip'

window.vuestrap = {
  alert,
  breadcrumb,
  buttons,
  buttonGroup,
  buttonCheckbox,
  buttonRadio,
  card,
  carousel,
  slide,
  collapse,
  collapseToggle,
  dropdown,
  dropdownSelect,
  formCheckbox,
  formInput,
  formSelect,
  formTextarea,
  formRadio,
  icons,
  images,
  jumbotron,
  labels,
  listGroup,
  media,
  modal,
  nav,
  navbar,
  pager,
  pagination,
  popover,
  progress,
  tables,
  tabs,
  tooltip,
}
