import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  label: {
    width: '90%',
    marginTop: 20,
    marginLeft: 20,
    fontSize: 16,
    color: '#f56725',
  },
  Input: {
    width: '90%',
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 3,
    borderColor: '#f56725',
    borderRadius: 10,
    backgroundColor: '#000',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonNewTask: {
    position: 'absolute',
    width: 60,
    height: 60,
    top: 700,
    left: 20,
    //laranjinha
    backgroundColor: '#f56725',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default styles;
